import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../../src/context/StoreContext";

const Cart = () => {
  const navigate = useNavigate();

  // 1. Destructure from StoreContext (handling both food_list or foodList)
  const {
    cartItems = {},
    addToCart,
    removeFromCart,
    deleteFromCart,
    food_list,
    foodList,
    foods,
  } = useContext(StoreContext);

  // Fallback array supporting food_list, foodList, or foods
  const productsList = food_list || foodList || foods || [];

  // Increase quantity
  const increaseItem = (id) => {
    addToCart(id);
  };

  // Decrease quantity
  const decreaseItem = (id) => {
    removeFromCart(id);
  };

  // Remove item completely
  const removeItem = (id) => {
    deleteFromCart(id);
  };

  // Calculate subtotal using productsList safely
  const subtotal = productsList.reduce((total, item) => {
    const itemId = item.id || item._id;
    const quantity = cartItems[itemId] || cartItems[String(itemId)] || 0;
    return total + Number(item.price) * quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 80 : 0;
  const total = subtotal + deliveryFee;

  // Handle Proceed to Checkout button click
  const handleCheckout = () => {
    if (subtotal === 0) {
      alert("Your cart is empty! Please add items before checking out.");
      return;
    }
    navigate("/order");
  };

  return (
    <main className="cart-container">
      <div className="cart-header">
        <span className="sub-title">YOUR ORDER</span>
        <h1 className="main-title">Shopping Cart</h1>
        <p className="cart-description">
          Review your order before proceeding to checkout.
        </p>
      </div>

      <div className="cart-table">
        <div className="cart-table-header">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {/* Render cart items */}
        {productsList.map((item) => {
          const itemId = item.id || item._id;
          const quantity = cartItems[itemId] || cartItems[String(itemId)] || 0;

          if (quantity === 0) return null;

          const imageUrl = item.image?.startsWith("http")
            ? item.image
            : `http://localhost:3000/uploads/${item.image}`;

          return (
            <div className="cart-item" key={itemId}>
              <img src={imageUrl} alt={item.name} />

              <p>{item.name}</p>

              <p>{item.price} ETB</p>

              <div className="quantity-box">
                <button onClick={() => decreaseItem(itemId)}>−</button>

                <span>{quantity}</span>

                <button onClick={() => increaseItem(itemId)}>+</button>
              </div>

              <p>{item.price * quantity} ETB</p>

              <button className="remove-btn" onClick={() => removeItem(itemId)}>
                ×
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <h2>Cart Total</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>{subtotal} ETB</span>
        </div>

        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>{deliveryFee} ETB</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>{total} ETB</span>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
};

export default Cart;
