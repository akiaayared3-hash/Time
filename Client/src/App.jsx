import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routing from "./component/pageRouting/Routing";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import LoginPop from "./component/loginPop/Login";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {showLogin && <LoginPop setShowLogin={setShowLogin} />}
      <Header setShowLogin={setShowLogin} cartItems={cartItems} />
      <Routing cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </>
  );
}

export default App;
