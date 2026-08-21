import { useEffect, useState } from "react";
import MenuCard from "../../component/menuCard/MenuCard";
import "./index.css";

const Index = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH FOOD ITEMS FROM BACKEND
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/foods");
        const result = await response.json();

        // Safe extraction regardless of API response shape
        if (Array.isArray(result)) {
          setFoods(result);
        } else if (result && Array.isArray(result.data)) {
          setFoods(result.data);
        } else if (result && Array.isArray(result.foods)) {
          setFoods(result.foods);
        } else {
          setFoods([]);
        }
      } catch (error) {
        console.error("Fetch error in Index component:", error);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const products = Array.isArray(foods) ? foods : [];

  return (
    <main className="landing-page-container">
      {/* ===================================================
          1. HERO BANNER (SLANTED SPLIT SECTION)
         =================================================== */}
      <section className="hero-banner-section">
        <div className="hero-split-wrapper">
          {/* Left Content Area */}
          <div className="hero-left-content">
            <p className="hero-tagline">FRESH • FAST • DELICIOUS</p>

            <h1 className="hero-main-title">
              TIME <br />
              <span className="gold-text">BURGER & PIZZA</span>
            </h1>

            <div className="icon-separator">
              <span className="line"></span>
              <span className="burger-emoji">🍔</span>
              <span className="line"></span>
            </div>

            <p className="hero-description">
              We serve the best burgers and pizza made with fresh ingredients
              every day.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="btn btn-red-fill">
                ORDER NOW →
              </a>
              <a href="/menu" className="btn btn-gold-outline">
                VIEW MENU →
              </a>
            </div>
          </div>

          {/* Right Visual Area (Slanted Dark Image) */}
          <div className="hero-right-visual">
            <img
              src="/image/photo-1568901346375-23c9450c58cd.avif"
              alt="TIME Flaming Burger"
              className="hero-burger-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          2. HERO FEATURE HIGHLIGHTS BAR (BELOW HERO)
         =================================================== */}
      <section className="hero-features-bar">
        <div className="container features-flex-wrapper">
          <div className="feature-card">
            <div className="feature-icon-circle">🍔</div>
            <div className="feature-text">
              <h4>FRESH INGREDIENTS</h4>
              <p>Quality you can taste every day</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-circle">🛵</div>
            <div className="feature-text">
              <h4>FAST DELIVERY</h4>
              <p>Quick & hot right to your door</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-circle">⭐</div>
            <div className="feature-text">
              <h4>BEST QUALITY</h4>
              <p>Handcrafted premium recipes</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-circle">❤️</div>
            <div className="feature-text">
              <h4>CUSTOMER LOVE</h4>
              <p>10,000+ happy food lovers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. BEST SELLERS PRODUCTS GRID
         =================================================== */}
      <section id="menu" className="best-sellers-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="sub-title">OUR BEST SELLERS</span>
              <h2 className="main-title">Best Sellers</h2>
            </div>
            <a href="/menu" className="view-all-link">
              VIEW ALL <span className="arrow">→</span>
            </a>
          </div>

          <div className="products-grid">
            {loading ? (
              <div className="loading-state">
                <h3>Loading menu items...</h3>
              </div>
            ) : products.length === 0 ? (
              <div className="loading-state">
                <h3>No items available</h3>
              </div>
            ) : (
              products.slice(0, 8).map((food) => {
                const foodId = food._id || food.id;

                return (
                  <MenuCard
                    key={foodId}
                    id={foodId}
                    image={
                      food.image?.startsWith("http")
                        ? food.image
                        : `http://localhost:3000/uploads/${food.image}`
                    }
                    name={food.name || "Food Item"}
                    price={food.price || 0}
                    rating={food.rating || 0}
                    reviews={food.reviews || 0}
                    badge={food.badge || ""}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
