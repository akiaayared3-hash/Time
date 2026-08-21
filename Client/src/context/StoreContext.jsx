import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:3000"; // <--- 1. DEFINED BACKEND BASE URL

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);

  // ============================
  // 1. GET FOODS FROM DATABASE
  // ============================
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(`${url}/api/foods`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setFoodList(data);
        } else if (Array.isArray(data.data)) {
          setFoodList(data.data);
        } else if (Array.isArray(data.foods)) {
          setFoodList(data.foods);
        } else {
          setFoodList([]);
        }
      } catch (error) {
        console.error("Food fetch error:", error);
      }
    };

    fetchFoods();
  }, []);

  // ============================
  // 2. TOKEN PERSISTENCE
  // ============================
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // ============================
  // 3. LOAD USER CART
  // ============================
  const loadCart = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${url}/api/cart`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success && Array.isArray(data.cart)) {
        const cart = {};
        data.cart.forEach((item) => {
          let id = item.foodId || item.food_id || item.id;

          if (typeof id === "object" && id !== null) {
            id = id._id || id.id;
          }

          if (id !== undefined && id !== null) {
            cart[String(id)] = Number(item.quantity);
          }
        });

        setCartItems(cart);
      }
    } catch (error) {
      console.error("Load cart error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      loadCart();
    } else {
      setCartItems({}); // Reset cart on logout
    }
  }, [token]);

  // ============================
  // 4. ADD TO CART
  // ============================
  const addToCart = async (id) => {
    const stringId = String(id);

    // Optimistic UI update
    setCartItems((prev) => ({
      ...prev,
      [stringId]: (prev[stringId] || 0) + 1,
    }));

    if (token) {
      try {
        const response = await fetch(`${url}/api/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ foodId: id }),
        });

        const data = await response.json();

        if (!data.success) {
          console.error("Failed to sync add to cart:", data.message);
          await loadCart();
        }
      } catch (error) {
        console.error("Add cart backend sync error:", error);
        await loadCart();
      }
    }
  };

  // ============================
  // 5. REMOVE FROM CART (-)
  // ============================
  const removeFromCart = async (id) => {
    const stringId = String(id);

    // Optimistic UI update
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[stringId] > 1) {
        updated[stringId] -= 1;
      } else {
        delete updated[stringId];
      }
      return updated;
    });

    if (token) {
      try {
        const response = await fetch(`${url}/api/cart/remove/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!data.success) {
          console.error("Failed to sync remove from cart:", data.message);
          await loadCart();
        }
      } catch (error) {
        console.error("Remove cart backend sync error:", error);
        await loadCart();
      }
    }
  };

  // ============================
  // 6. DELETE ITEM COMPLETELY (×)
  // ============================
  const deleteFromCart = async (id) => {
    const stringId = String(id);

    const previousCart = { ...cartItems };

    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[stringId];
      return updated;
    });

    if (token) {
      try {
        const response = await fetch(`${url}/api/cart/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!data.success) {
          console.error("Backend failed to delete item:", data.message);
          setCartItems(previousCart);
        }
      } catch (error) {
        console.error("Delete cart item network error:", error);
        setCartItems(previousCart);
      }
    }
  };

  // ============================
  // 7. CLEAR CART AFTER ORDER
  // ============================
  const clearCart = () => {
    setCartItems({});
  };

  // ============================
  // 8. LOGOUT
  // ============================
  const logout = () => {
    setToken("");
    setCartItems({});
    localStorage.removeItem("token");
  };

  const contextValue = {
    url, // <--- 2. ADDED URL HERE
    food_list,
    token,
    setToken,
    logout,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart, // <--- 3. ADDED CLEARCART HERE
    loadCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
