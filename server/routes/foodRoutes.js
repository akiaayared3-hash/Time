import express from "express";
import {
  getFoods,
  addFood,
  removeFood,
} from "../controllers/foodControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// GET ALL FOODS
router.get("/", getFoods);

// ADD FOOD
router.post("/add", upload.single("image"), addFood);

// DELETE FOOD
router.delete("/remove/:id", removeFood);

export default router;
