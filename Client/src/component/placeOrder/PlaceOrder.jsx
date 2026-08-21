import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import "./placeOrder.css";

const PlaceOrder = () => {
  const {
    cartItems = {},
    food_list,
    foodList,
    foods,
    token,
    url = "http://localhost:3000",
    clearCart,
  } = useContext(StoreContext);

  // Normalize food list to support food_list, foodList, or foods
  const productsList = food_list || foodList || foods || [];
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "Debre brhan",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Calculate Subtotal
  const getSubtotal = () => {
    let subtotal = 0;
    if (!Array.isArray(productsList) || productsList.length === 0) return 0;

    for (const itemKey in cartItems) {
      const qty = cartItems[itemKey];
      if (qty > 0) {
        let itemInfo = productsList.find(
          (product) => String(product.id || product._id) === String(itemKey),
        );
        if (itemInfo) {
          subtotal += Number(itemInfo.price) * qty;
        }
      }
    }
    return subtotal;
  };

  const subtotal = getSubtotal();
  const deliveryFee = subtotal > 0 ? 80 : 0;
  const totalAmount = subtotal + deliveryFee;

  // Submit Order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please log in to place an order!");
      return;
    }

    let orderItems = [];
    if (Array.isArray(productsList)) {
      productsList.forEach((item) => {
        const itemId = item.id || item._id;
        const quantity = cartItems[itemId] || cartItems[String(itemId)] || 0;

        if (quantity > 0) {
          orderItems.push({
            foodId: itemId,
            name: item.name,
            price: item.price,
            quantity: quantity,
          });
        }
      });
    }

    if (orderItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      street: data.street,
      city: data.city,
      paymentMethod: paymentMethod, // "cod" or "online"
      items: orderItems,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: {
          token: token,
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        // Handle both session_url or checkout_url returned by backend
        const redirectUrl =
          response.data.session_url || response.data.checkout_url;

        if (paymentMethod === "online" && redirectUrl) {
          // Redirect user directly to Chapa payment portal
          window.location.replace(redirectUrl);
        } else {
          // For Cash on Delivery
          if (clearCart) clearCart();
          toast.success("Order placed successfully!");
          setTimeout(() => {
            navigate("/myorders");
          }, 1200);
        }
      } else {
        toast.error(response.data.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Order submit error:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired or unauthorized. Please log in again.");
      } else {
        toast.error(
          "Something went wrong. Please check your network connection.",
        );
      }
    }
  };

  return (
    <main className="place-order-container">
      <div className="place-order-card">
        <h1>Delivery Information</h1>

        <form className="place-order-form" onSubmit={handlePlaceOrder}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={onChangeHandler}
                placeholder="First name"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={onChangeHandler}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={onChangeHandler}
                placeholder="09..."
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Street Address</label>
            <textarea
              name="street"
              value={data.street}
              onChange={onChangeHandler}
              placeholder="Delivery address / Subcity"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={onChangeHandler}
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="online">
                  Digital Payment (Chapa / Telebirr)
                </option>
              </select>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="order-summary-box">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{subtotal} ETB</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>{deliveryFee} ETB</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <strong>Total:</strong>
              <strong>{totalAmount} ETB</strong>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            {paymentMethod === "online" ? "Proceed to Payment" : "Place Order"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default PlaceOrder;
