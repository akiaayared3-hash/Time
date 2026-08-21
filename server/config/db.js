import mysql from "mysql2";

// connecting

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Time databases",
  port: 8889,
});


db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});








export default db;