import './menu.css'

const Menu = () => {
  return (
    <>
      {/* Main Menu Grid Section */}

      <main className="menu-container">
        {/* Section Header Row  */}
        <div className="menu-header">
          <div className="title-block">
            <span className="sub-title">OUR BEST SELLERS</span>
            <h1 className="main-title">Best Sellers</h1>
          </div>
        </div>

        {/* Product Grid: Displays the 8 items  */}
        <div className="products-grid">
          {/* Product 1: Time Special Burger  */}
          <div className="product-card">
            <div className="image-box">
              <span className="badge label-best">BEST SELLER</span>
              <img
                src="../../../../public/image/menu first.avif"
                alt="Time Special Burger"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Time Special Burger</h3>
                <span className="price">
                  850 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.8 (230)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 2: Chicken Pizza  */}
          <div className="product-card">
            <div className="image-box">
              <span className="badge label-hot">HOT</span>
              <img
                src="../../../../public/image/menu second.avif"
                alt="Chicken Pizza"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Chicken Pizza</h3>
                <span className="price">
                  650 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.7 (196)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 3: Double Burger  */}
          <div className="product-card">
            <div className="image-box">
              <img
                src="../../../../public/image/menu thireed.avif"
                alt="Double Burger"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Double Burger</h3>
                <span className="price">
                  1,200 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.6 (150)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 4: French Fries  */}
          <div className="product-card">
            <div className="image-box">
              <img
                src="../../../../public/image/item four.avif"
                alt="French Fries"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">French Fries</h3>
                <span className="price">
                  200 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.5 (98)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 5: Cheese Burger */}
          <div className="product-card">
            <div className="image-box">
              <span className="badge label-best">BEST SELLER</span>
              <img
                src="../../../../public/image/menu five.avif"
                alt="Cheese Burger"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Cheese Burger</h3>
                <span className="price">
                  950 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.9 (310)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 6: Pepperoni Pizza */}
          <div className="product-card">
            <div className="image-box">
              <span className="badge label-hot">HOT</span>
              <img
                src="../../../../public/image/menu six.avif"
                alt="Pepperoni Pizza"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Pepperoni Pizza</h3>
                <span className="price">
                  750 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.8 (185)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 7: Loaded Nachos  */}
          <div className="product-card">
            <div className="image-box">
              <img
                src="../../../../public/image/menu seven.avif"
                alt="Loaded Nachos"
              />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Loaded Nachos</h3>
                <span className="price">
                  450 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.4 (76)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
          {/* Product 8: Chocolate Brownie */}
          <div className="product-card">
            <div className="image-box">
              <img src="../../../../public/image/menu egiht.avif" alt="Chocolate Brownie" />
            </div>
            <div className="product-details">
              <div className="meta-row">
                <h3 className="product-name">Choco Brownie</h3>
                <span className="price">
                  350 <span className="currency">ETB</span>
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-count">4.9 (120)</span>
              </div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Menu
