import db from "../config/db.js";


export const findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

export const createUser = (user, callback) => {
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [user.name, user.email, user.password], callback);
};