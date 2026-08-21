import express from "express";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateStatus,
  updatePaymentStatus,
} from "../controllers/orderControlers.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

// Customer Endpoints
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/userorders", authMiddleware, getUserOrders);

// Admin Dashboard Endpoints
orderRouter.get("/list", getAllOrders);
orderRouter.post("/status", updateStatus);
orderRouter.post("/payment-status", updatePaymentStatus);

export default orderRouter;
