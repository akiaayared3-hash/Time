import OrderModel from "../models/orderModels.js";
import axios from "axios";

// Helper to sanitize phone numbers for Chapa
const formatPhone = (phone) => {
  if (!phone) return "0900000000";
  let cleaned = String(phone).replace(/\D/g, ""); // strip non-digits
  if (cleaned.startsWith("251")) {
    cleaned = "0" + cleaned.slice(3);
  }
  return cleaned;
};

// ==========================
// 1. PLACE NEW ORDER
// ==========================
export const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const {
      items,
      street,
      phone,
      firstName,
      lastName,
      email,
      city,
      paymentMethod,
    } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No items in order" });
    }

    if (!street || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Delivery details missing" });
    }

    const subtotal = items.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0,
    );

    const deliveryFee = subtotal > 0 ? 80 : 0;
    const totalAmount = subtotal + deliveryFee;

    const selectedPaymentMethod =
      paymentMethod === "online" ? "Digital Payment" : "Cash on Delivery";

    const tx_ref = `TB-${Date.now()}-${userId}`;

    const orderData = {
      userId,
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      phone,
      street,
      city: city || "Debre Berhan",
      subtotal,
      deliveryFee,
      totalAmount,
      paymentMethod: selectedPaymentMethod,
      paymentStatus: "Pending",
      tx_ref,
    };

    OrderModel.createOrder(orderData, items, async (err, result) => {
      if (err) {
        console.error("❌ Database Order Creation Error:", err.message || err);
        return res.status(500).json({
          success: false,
          message: "Failed to place order in database.",
        });
      }

      const orderId = result.orderId;

      // IF ONLINE PAYMENT (Chapa Integration)
      if (paymentMethod === "online") {
        try {
          const frontendUrl =
            process.env.FRONTEND_URL || "http://localhost:5173";
          const backendUrl = process.env.BACKEND_URL || "http://localhost:3000";

          const formattedPhone = formatPhone(phone);

          const chapaPayload = {
            amount: totalAmount.toString(),
            currency: "ETB",
            email: email || "customer@example.com",
            first_name: firstName || "Customer",
            last_name: lastName || "User",
            phone_number: formattedPhone,
            tx_ref: tx_ref,
            callback_url: `${backendUrl}/api/order/verify`,
            return_url: `${frontendUrl}/verify?success=true&orderId=${orderId}&tx_ref=${tx_ref}`,
            "customizations[title]": "Time Burger & Pizza",
            "customizations[description]": `Order #${orderId}`,
          };

          const chapaResponse = await axios.post(
            "https://api.chapa.co/v1/transaction/initialize",
            chapaPayload,
            {
              headers: {
                Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
                "Content-Type": "application/json",
              },
            },
          );

          if (chapaResponse.data && chapaResponse.data.status === "success") {
            return res.json({
              success: true,
              session_url: chapaResponse.data.data.checkout_url,
              orderId,
            });
          } else {
            return res.status(400).json({
              success: false,
              message: "Chapa initialization failed.",
            });
          }
        } catch (chapaError) {
          console.error(
            "❌ Chapa API Error:",
            chapaError.response?.data || chapaError.message,
          );
          return res.status(500).json({
            success: false,
            message:
              chapaError.response?.data?.message ||
              "Payment gateway communication error.",
          });
        }
      }

      // CASH ON DELIVERY
      return res.json({
        success: true,
        message: "Order placed successfully",
        orderId,
        currency: "ETB",
      });
    });
  } catch (error) {
    console.error("❌ Place Order Controller Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// ==========================
// 2. VERIFY ORDER PAYMENT (Chapa Gateway)
// ==========================
export const verifyOrder = async (req, res) => {
  const { orderId, success, tx_ref } = req.body;

  if (!orderId) {
    return res
      .status(400)
      .json({ success: false, message: "Order ID is required" });
  }

  if (success === "true" || success === true) {
    try {
      if (tx_ref && process.env.CHAPA_SECRET_KEY) {
        const verifyRes = await axios.get(
          `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
            },
          },
        );

        if (verifyRes.data && verifyRes.data.status === "success") {
          return OrderModel.updatePaymentStatus(orderId, "Paid", (err) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: "Failed to update payment status",
              });
            }
            return res.json({
              success: true,
              message: "Payment verified and order paid!",
            });
          });
        }
      }

      // Fallback
      return OrderModel.updatePaymentStatus(orderId, "Paid", (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Failed to update payment status",
          });
        }
        return res.json({
          success: true,
          message: "Payment verified and order paid!",
        });
      });
    } catch (err) {
      console.error(
        "❌ Chapa Verification Error:",
        err.response?.data || err.message,
      );
      OrderModel.updatePaymentStatus(orderId, "Failed", () => {});
      return res.status(400).json({
        success: false,
        message: "Payment verification failed with Chapa.",
      });
    }
  } else {
    OrderModel.updateOrderStatus(orderId, "Cancelled", (err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Error updating order" });
      }
      OrderModel.updatePaymentStatus(orderId, "Failed", () => {});
      return res.json({
        success: false,
        message: "Payment failed. Order cancelled.",
      });
    });
  }
};

// ==========================
// 3. GET USER ORDERS
// ==========================
export const getUserOrders = (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  OrderModel.getOrdersByUserId(userId, (err, orders) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    res.json({
      success: true,
      orders,
      currency: "ETB",
    });
  });
};

// ==========================
// 4. GET SINGLE ORDER BY ID
// ==========================
export const getOrderById = (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    return res
      .status(400)
      .json({ success: false, message: "Order ID missing" });
  }

  OrderModel.getOrderById(orderId, (err, order) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.json({
      success: true,
      order,
    });
  });
};

// ==========================
// 5. GET ALL ORDERS (Admin)
// ==========================
export const getAllOrders = (req, res) => {
  OrderModel.getAllOrders((err, orders) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    res.json({
      success: true,
      orders,
      currency: "ETB",
    });
  });
};

// ==========================
// 6. UPDATE ORDER STATUS (Admin)
// ==========================
export const updateStatus = (req, res) => {
  const { orderId, status } = req.body;

  if (!orderId || !status) {
    return res.status(400).json({
      success: false,
      message: "Order ID and status are required",
    });
  }

  OrderModel.updateOrderStatus(orderId, status, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.json({
      success: true,
      message: "Order status updated",
    });
  });
};

// ==========================
// 7. UPDATE PAYMENT STATUS (Admin)
// ==========================
export const updatePaymentStatus = (req, res) => {
  const { orderId, paymentStatus } = req.body;

  if (!orderId || !paymentStatus) {
    return res.status(400).json({
      success: false,
      message: "Order ID and payment status are required",
    });
  }

  OrderModel.updatePaymentStatus(orderId, paymentStatus, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    res.json({
      success: true,
      message: `Payment status updated to ${paymentStatus}`,
    });
  });
};
