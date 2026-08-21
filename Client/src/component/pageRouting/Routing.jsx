
import { Route, Routes } from "react-router-dom"
import Index from '../../../src/pages/index'
import About from "../../../src/pages/about/About";
import Menu from ".../../../src/pages/menu/Menu";
import Categories from "../../../src/pages/categories/Categories";
import Contact from "../../../src/pages/contact/Contact";
import Cart from "../../pages/cart/Cart"
import PlaceOrder from '../placeOrder/PlaceOrder'
import Verify from "../verify/Verify";
import MyOrders from "../../pages/myOrders/MyOrders";

const Routing = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Index cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={<Menu cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/categories"
          element={
            <Categories cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </>
  );
};

export default Routing
