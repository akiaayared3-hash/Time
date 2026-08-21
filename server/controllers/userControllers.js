import db from "../config/db.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

// Generate JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Register User
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Check empty fields
  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: "All fields are required",
    });
  }

  // Validate email
  if (!validator.isEmail(email)) {
    return res.json({
      success: false,
      message: "Invalid email",
    });
  }

  // Password length
  if (password.length < 8) {
    return res.json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  // Check if email exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: err.message,
        });
      }

      if (result.length > 0) {
        return res.json({
          success: false,
          message: "User already exists",
        });
      }

      try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        db.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err, result) => {
            if (err) {
              return res.json({
                success: false,
                message: err.message,
              });
            }

            const token = createToken(result.insertId);

            res.json({
              success: true,
              token,
            });
          },
        );
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
    },
  );
};

// Login User
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: err.message,
        });
      }

      if (result.length === 0) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.json({
          success: false,
          message: "Invalid credentials",
        });
      }

      const token = createToken(user.id);

      res.json({
        success: true,
        token,
      });
    },
  );
};
