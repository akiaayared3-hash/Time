import { useState, useContext, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { StoreContext } from "../../context/StoreContext";
import "./header.css";

const Header = ({ setShowLogin }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const navigate = useNavigate();

  const { token, logout, cartItems } = useContext(StoreContext);

  const cartCount = Object.values(cartItems || {}).reduce(
    (total, item) => total + item,
    0,
  );

  // Close dropdowns on outside click
  useEffect(() => {
    const close = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setUserOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleLogout = () => {
    logout();
    setUserOpen(false);
    setMobileOpen(false);
    toast.success("Logout successful");
    navigate("/");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${searchQuery}`);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="custom-header">
      <div className="container header-container">
        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        {/* LOGO */}
        <Link to="/" className="logo-wrapper" onClick={closeMobileMenu}>
          <div className="logo-title">TIME</div>
          <div className="logo-subtitle">BURGER & PIZZA</div>
        </Link>

        {/* MOBILE RIGHT ACTIONS (Always Visible on Mobile Top Bar) */}
        <div className="mobile-actions">
          <Link to="/cart" className="icon-btn">
            <i className="bi bi-bag"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {token ? (
            <div className="user-box" ref={mobileDropdownRef}>
              <button
                className="icon-btn"
                onClick={() => setUserOpen(!userOpen)}
              >
                <i className="bi bi-person-circle"></i>
              </button>

              {userOpen && (
                <div className="user-dropdown">
                  <Link to="/myorders" onClick={() => setUserOpen(false)}>
                    <i className="bi bi-bag-check"></i> Orders
                  </Link>
                  <button onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          )}
        </div>

        {/* NAVIGATION & DESKTOP ACTIONS */}
        <nav className={`nav-menu ${mobileOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink end to="/" onClick={closeMobileMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={closeMobileMenu}>
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" onClick={closeMobileMenu}>
                CATEGORIES
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* DESKTOP ACTIONS (Search, Cart, Profile) */}
          <div className="desktop-actions">
            <form onSubmit={searchHandler}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food..."
              />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            <Link to="/cart" className="icon-btn">
              <i className="bi bi-bag"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            {token ? (
              <div className="user-box" ref={dropdownRef}>
                <button
                  className="profile-btn"
                  onClick={() => setUserOpen(!userOpen)}
                >
                  <i className="bi bi-person"></i>
                </button>

                {userOpen && (
                  <div className="user-dropdown">
                    <Link to="/myorders" onClick={() => setUserOpen(false)}>
                      Orders
                    </Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                Sign In
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
