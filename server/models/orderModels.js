import db from "../config/db.js";

const OrderModel = {
  // 1. Create a new order and insert items in a single process
  createOrder: (orderData, items, callback) => {
    const orderSql = `
      INSERT INTO orders 
        (user_id, first_name, last_name, email, phone, street, city, subtotal, delivery_fee, total_amount, payment_method, payment_status, tx_ref)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const orderValues = [
      orderData.userId,
      orderData.firstName,
      orderData.lastName,
      orderData.email,
      orderData.phone,
      orderData.street,
      orderData.city,
      orderData.subtotal,
      orderData.deliveryFee,
      orderData.totalAmount,
      orderData.paymentMethod,
      orderData.paymentStatus || "Pending",
      orderData.tx_ref || null,
    ];

    db.query(orderSql, orderValues, (err, orderResult) => {
      if (err) return callback(err, null);

      const orderId = orderResult.insertId;

      // Prepare bulk insert values for order_items
      const itemValues = items.map((item) => [
        orderId,
        item.foodId || item.id,
        item.quantity,
        item.price,
      ]);

      const itemsSql = `
        INSERT INTO order_items (order_id, food_id, quantity, price)
        VALUES ?
      `;

      db.query(itemsSql, [itemValues], (err) => {
        if (err) return callback(err, null);

        // Clear user's cart after successfully creating the order
        const clearCartSql = `DELETE FROM cart WHERE user_id = ?`;
        db.query(clearCartSql, [orderData.userId], (err) => {
          if (err) {
            console.error("Cart clear warning after order:", err.message);
          }

          return callback(null, { orderId });
        });
      });
    });
  },

  // 2. Fetch user orders (for customer 'My Orders' page)
  getOrdersByUserId: (userId, callback) => {
    const sql = `
      SELECT 
        o.id AS orderId,
        o.subtotal,
        o.delivery_fee AS deliveryFee,
        o.total_amount AS totalAmount,
        o.payment_method AS paymentMethod,
        o.payment_status AS paymentStatus,
        o.order_status AS orderStatus,
        o.created_at AS createdAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'foodId', f.id,
            'name', f.name,
            'image', f.image,
            'price', oi.price,
            'quantity', oi.quantity
          )
        ) AS items
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN foods f ON oi.food_id = f.id
      WHERE o.user_id = ?
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `;

    db.query(sql, [userId], (err, results) => {
      if (err) return callback(err, null);

      const parsedOrders = results.map((order) => ({
        ...order,
        items:
          typeof order.items === "string"
            ? JSON.parse(order.items)
            : order.items,
      }));

      return callback(null, parsedOrders);
    });
  },

  // 3. Fetch all orders (for Admin Dashboard)
  getAllOrders: (callback) => {
    const sql = `
      SELECT 
        o.id AS orderId,
        o.user_id AS userId,
        CONCAT(o.first_name, ' ', o.last_name) AS customerName,
        o.phone,
        o.street,
        o.city,
        o.total_amount AS totalAmount,
        o.order_status AS orderStatus,
        o.payment_status AS paymentStatus,
        o.created_at AS createdAt,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'name', f.name,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) AS items
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN foods f ON oi.food_id = f.id
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `;

    db.query(sql, (err, results) => {
      if (err) return callback(err, null);

      const parsedOrders = results.map((order) => ({
        ...order,
        items:
          typeof order.items === "string"
            ? JSON.parse(order.items)
            : order.items,
      }));

      return callback(null, parsedOrders);
    });
  },

  // 4. Update order delivery/preparation status
  updateOrderStatus: (orderId, status, callback) => {
    const sql = `UPDATE orders SET order_status = ? WHERE id = ?`;
    db.query(sql, [status, orderId], (err, result) => {
      if (err) return callback(err, null);
      return callback(null, result);
    });
  },

  // 5. Update payment status (Paid, Unpaid, Failed)
  updatePaymentStatus: (orderId, paymentStatus, callback) => {
    const sql = `UPDATE orders SET payment_status = ? WHERE id = ?`;
    db.query(sql, [paymentStatus, orderId], (err, result) => {
      if (err) return callback(err, null);
      return callback(null, result);
    });
  },
};

export default OrderModel;
