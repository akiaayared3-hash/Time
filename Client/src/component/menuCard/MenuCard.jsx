import { useContext } from "react";
import { StoreContext } from "../../../src/context/StoreContext";
import "./menuCard.css";

function MenuCard({ id, image, name, price, rating = 0, reviews = 0, badge }) {
  const {
    cartItems = {},
    addToCart,
    removeFromCart,
  } = useContext(StoreContext);

  const quantity = cartItems[id] || 0;

  // Render badge class dynamically
  const getBadgeClass = (badgeText) => {
    if (!badgeText) return "badge";
    const lower = badgeText.toLowerCase();
    if (lower.includes("hot")) return "badge label-hot";
    if (lower.includes("best") || lower.includes("seller"))
      return "badge label-best";
    return "badge label-default";
  };

  return (
    <div className="product-card">
      {/* IMAGE CONTAINER WITH FLOATING COUNTER */}
      <div className="image-box">
        {badge && <span className={getBadgeClass(badge)}>{badge}</span>}

        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300?text=Food+Image";
          }}
        />

        {/* Floating Quick Add / Counter */}
        {quantity === 0 ? (
          <button
            className="add-quick-btn"
            onClick={() => addToCart(id)}
            aria-label="Add item"
            title="Add to cart"
          >
            +
          </button>
        ) : (
          <div className="food-item-counter">
            <button
              onClick={() => removeFromCart(id)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="counter-qty">{quantity}</span>
            <button
              onClick={() => addToCart(id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* PRODUCT DETAILS AREA */}
      <div className="product-details">
        <div className="meta-row">
          <h3 className="product-name" title={name}>
            {name}
          </h3>
          <div className="price-tag">
            <span className="price-value">{price}</span>
            <span className="currency"> ETB</span>
          </div>
        </div>

        <div className="rating-row">
          <span className="stars">★★★★★</span>
          <span className="rating-count">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <button
          className={`add-to-cart-btn ${quantity > 0 ? "active-in-cart" : ""}`}
          onClick={() => addToCart(id)}
        >
          {quantity > 0 ? (
            <>
              <i className="bi bi-cart-check-fill"></i> IN CART ({quantity})
            </>
          ) : (
            <>🛒 ADD TO CART</>
          )}
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
