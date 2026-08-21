import express from "express";

import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  deleteFromCart,
  clearCart,
} from "../controllers/cartControllers.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// GET USER CART
router.get("/", auth, getCart);

// ADD ITEM TO CART (+)
router.post("/add", auth, addToCart);

// UPDATE CART ITEM QUANTITY DIRECTLY
router.put("/update/:id", auth, updateCart);

// DECREASE ITEM QUANTITY (-)
router.delete("/remove/:id", auth, removeFromCart);

// REMOVE ITEM COMPLETELY FROM CART (×)
router.delete("/delete/:id", auth, deleteFromCart);

// CLEAR USER CART
router.delete("/clear", auth, clearCart);

export default router;
