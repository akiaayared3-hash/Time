import dotenv from "dotenv";
dotenv.config(); // Must be called before anything else!

import express from "express";
import cors from "cors";
import db from "./config/db.js";
import foodRoutes from "./routes/foodRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRotes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Static Uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Database Connection Test
db.query("SELECT 1", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
