import { useEffect, useState } from "react";
import MenuCard from "../../component/menuCard/MenuCard";
import "./catagories.css";

const Categories = () => {
  const [category, setCategory] = useState("All");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH FOODS FROM API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/foods");
        const data = await response.json();

        // Safely set array regardless of backend structure
        if (Array.isArray(data)) {
          setFoods(data);
        } else if (Array.isArray(data.foods)) {
          setFoods(data.foods);
        } else if (Array.isArray(data.data)) {
          setFoods(data.data);
        } else {
          setFoods([]);
        }
      } catch (error) {
        console.error("Fetch error in Categories:", error);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  // 2. SAFE & CASE-INSENSITIVE CATEGORY FILTERING
  const foodList = Array.isArray(foods) ? foods : [];

  const filteredProducts =
    category === "All"
      ? foodList
      : foodList.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase().trim() ===
              category.toLowerCase().trim(),
        );

  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="tagline">FRESH • FAST • DELICIOUS</p>

            <h1 className="hero-title">
              TIME <span>BURGER & PIZZA</span>
            </h1>

            <p className="hero-description">
              We serve the best burgers and pizza made with fresh ingredients
              every day.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="btn btn-primary">
                ORDER NOW →
              </a>

              <a href="/menu" className="btn btn-outline">
                VIEW MENU →
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/image/catagory banner.avif"
              alt="TIME Burger"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="features-bar">
        <div className="container features-grid">
          <div className="feature-item">
            <span className="feature-icon">🍔</span>
            <div>
              <h3>FRESH INGREDIENTS</h3>
              <p>Quality you can taste</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🛵</span>
            <div>
              <h3>FAST DELIVERY</h3>
              <p>Quick to your door</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <div>
              <h3>BEST QUALITY</h3>
              <p>Premium ingredients</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">❤️</span>
            <div>
              <h3>CUSTOMER LOVE</h3>
              <p>Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="categories-section">
        <div className="container categories-grid">
          {[
            ["All", "🍽️"],
            ["burgers", "🍔"],
            ["pizza", "🍕"],
            ["fries", "🍟"],
            ["drinks", "🥤"],
            ["deserts", "🍰"],
          ].map(([name, icon]) => (
            <button
              key={name}
              className={`category-card ${
                category.toLowerCase() === name.toLowerCase() ? "active" : ""
              }`}
              onClick={() => setCategory(name)}
            >
              <span className="category-icon">{icon}</span>
              <span className="text-capitalize">{name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS DISPLAY GRID */}
      <section id="menu" className="products-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="sub-title">OUR SELECTION</span>
              <h2 className="section-title">
                {category === "All"
                  ? "Best Sellers"
                  : `${category.toUpperCase()}`}
              </h2>
            </div>
          </div>

          <div className="products-grid">
            {loading ? (
              <h3>Loading menu items...</h3>
            ) : filteredProducts.length === 0 ? (
              <h3>No items found for this category</h3>
            ) : (
              filteredProducts.map((food) => {
                // Resolution for MongoDB _id vs SQL id
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
                    name={food.name || "Menu Item"}
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

export default Categories;
