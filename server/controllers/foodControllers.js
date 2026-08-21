import db from "../config/db.js";
import Food from "../models/foodModels.js";

// GET all foods
export const getFoods = (req, res) => {
  Food.getAllFoods((err, foods) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      data: foods,
    });
  });
};

// ADD food
export const addFood = (req, res) => {
  const food = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename,
  };

  Food.addFood(food, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      message: "Food added successfully",
    });
  });
};

// remove food

export const removeFood = async (req, res) => {
  try {
    const { id } = req.params;

    const sql = "DELETE FROM foods WHERE id = ?";

    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Food removed successfully",
      });
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
