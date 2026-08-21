import db from "../config/db.js";

// ==========================
// 1. GET USER CART
// ==========================
export const getCart = (req, res) => {
  const userId = req.userId;

  const sql = `
    SELECT
      cart.id AS cartId,
      cart.quantity,
      foods.id AS foodId,
      foods.name,
      foods.price,
      foods.image
    FROM cart
    JOIN foods 
    ON cart.food_id = foods.id
    WHERE cart.user_id = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      cart: result,
    });
  });
};

// ==========================
// 2. ADD TO CART
// ==========================
export const addToCart = (req, res) => {
  const userId = req.userId;
  const foodId = Number(req.body.foodId);

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: User ID missing",
    });
  }

  if (!foodId || isNaN(foodId)) {
    return res.status(400).json({
      success: false,
      message: "Valid foodId is required",
    });
  }

  const checkSql = `
    SELECT * FROM cart
    WHERE user_id = ? 
    AND food_id = ?
  `;

  db.query(checkSql, [userId, foodId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length > 0) {
      const updateSql = `
        UPDATE cart
        SET quantity = quantity + 1
        WHERE user_id = ? 
        AND food_id = ?
      `;

      db.query(updateSql, [userId, foodId], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        res.json({
          success: true,
          message: "Cart quantity increased",
        });
      });
    } else {
      const insertSql = `
        INSERT INTO cart (user_id, food_id, quantity)
        VALUES (?, ?, 1)
      `;

      db.query(insertSql, [userId, foodId], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        res.json({
          success: true,
          message: "Added to cart",
        });
      });
    }
  });
};

// ==========================
// 3. UPDATE CART QUANTITY
// ==========================
export const updateCart = (req, res) => {
  const userId = req.userId;
  const foodId = Number(req.params.id);
  const quantity = Number(req.body.quantity);

  if (!userId || isNaN(foodId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID or Food ID",
    });
  }

  if (quantity <= 0) {
    return deleteFromCart(req, res);
  }

  const sql = `
    UPDATE cart
    SET quantity = ?
    WHERE user_id = ? 
    AND food_id = ?
  `;

  db.query(sql, [quantity, userId, foodId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Item not found in user cart",
      });
    }

    res.json({
      success: true,
      message: "Cart updated successfully",
    });
  });
};

// ==========================
// 4. DECREASE ONE ITEM (-)
// ==========================
export const removeFromCart = (req, res) => {
  const userId = req.userId;
  const foodId = Number(req.params.id);

  if (!userId || isNaN(foodId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID or Food ID",
    });
  }

  const checkSql = `
    SELECT quantity
    FROM cart
    WHERE user_id = ?
    AND food_id = ?
  `;

  db.query(checkSql, [userId, foodId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    const currentQty = result[0].quantity;

    if (currentQty <= 1) {
      db.query(
        `
        DELETE FROM cart
        WHERE user_id = ?
        AND food_id = ?
        `,
        [userId, foodId],
        (err, deleteResult) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          if (deleteResult.affectedRows === 0) {
            return res.status(404).json({
              success: false,
              message: "Failed to delete item from database",
            });
          }

          res.json({
            success: true,
            message: "Removed from cart completely",
          });
        },
      );
    } else {
      db.query(
        `
        UPDATE cart
        SET quantity = quantity - 1
        WHERE user_id = ?
        AND food_id = ?
        `,
        [userId, foodId],
        (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.json({
            success: true,
            message: "Cart quantity decreased",
          });
        },
      );
    }
  });
};

// ==========================
// 5. DELETE ITEM COMPLETELY (×)
// ==========================
export const deleteFromCart = (req, res) => {
  const userId = req.userId;
  const foodId = Number(req.params.id);

  if (!userId || isNaN(foodId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID or Food ID",
    });
  }

  db.query(
    `
    DELETE FROM cart
    WHERE user_id = ?
    AND food_id = ?
    `,
    [userId, foodId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      // Check if MySQL actually deleted the row!
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Item was not found in your cart database",
        });
      }

      res.json({
        success: true,
        message: "Item deleted from cart",
      });
    },
  );
};

// ==========================
// 6. CLEAR ENTIRE CART
// ==========================
export const clearCart = (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  db.query(
    `
    DELETE FROM cart
    WHERE user_id = ?
    `,
    [userId],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Cart cleared",
      });
    },
  );
};
