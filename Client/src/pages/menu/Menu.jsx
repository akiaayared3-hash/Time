import { useEffect, useState } from "react";
import MenuCard from "../../component/menuCard/MenuCard";
import "./menu.css";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get foods from database safely
  useEffect(() => {
    fetch("http://localhost:3000/api/foods")
      .then((res) => res.json())
      .then((data) => {
        // Safe extraction regardless of API response shape
        if (Array.isArray(data)) {
          setFoods(data);
        } else if (Array.isArray(data.foods)) {
          setFoods(data.foods);
        } else if (Array.isArray(data.data)) {
          setFoods(data.data);
        } else {
          setFoods([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error in Menu:", err);
        setFoods([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Guard against non-array values
  const productList = Array.isArray(foods) ? foods : [];

  return (
    <main className="menu-page-wrapper">
      <div className="container">
        {/* HEADER SECTION */}
        <div className="menu-header">
          <div className="title-block">
            <span className="sub-title">EXPLORE OUR DELICIOUS DISHES</span>
            <h1 className="main-title">Full Menu</h1>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid">
          {loading ? (
            <div className="grid-state-message">
              <h3>Loading menu items...</h3>
            </div>
          ) : productList.length === 0 ? (
            <div className="grid-state-message">
              <h3>No menu items available right now</h3>
            </div>
          ) : (
            productList.map((food) => {
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
    </main>
  );
};

export default Menu;
