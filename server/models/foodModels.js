import db from "../config/db.js";

const Food = {
  getAllFoods: (callback) => {
    const sql = "SELECT * FROM foods";
    db.query(sql, callback);
  },

  getFoodById: (id, callback) => {
    const sql = "SELECT * FROM foods WHERE id = ?";
    db.query(sql, [id], callback);
  },

  addFood: (food, callback) => {
    const sql = `
      INSERT INTO foods
      (name, description, price, image, category)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      food.name,
      food.description,
      food.price,
      food.image,
      food.category,
    ];

    db.query(sql, values, callback);
  },
};

export default Food;
