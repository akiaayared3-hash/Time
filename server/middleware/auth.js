import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    let token = req.headers.token; // Check custom header first

    // If no custom token header, check standard Authorization Bearer header
    const authHeader = req.headers.authorization;
    if (!token && authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "random_secret",
    );

    // Check both decoded.id and decoded.userId
    req.userId = decoded.id || decoded.userId;

    if (!req.userId) {
      console.error(
        "❌ JWT Token missing id/userId field in payload:",
        decoded,
      );
      return res.status(401).json({
        success: false,
        message: "Invalid token payload.",
      });
    }

    next();
  } catch (error) {
    console.error("❌ Auth Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export default auth;
