import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./login.css";
import { StoreContext } from "../../../src/context/StoreContext";

const Login = ({ setShowLogin }) => {
  const { setToken } = useContext(StoreContext);
  const [isRegister, setIsRegister] = useState(false);

  const url = "http://localhost:3000/api/users";

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (isRegister) {
        response = await axios.post(`${url}/register`, data);
        
      } else {
        response = await axios.post(`${url}/login`, {
          email: data.email,
          password: data.password,
        });
      }
         

      if (response.data.success) {
        if (isRegister) {
          toast.success("Account created successfully");

          setIsRegister(false);

          setData({
            name: "",
            email: "",
            password: "",
          });
        } else {
          
          setToken(response.data.token);

          toast.success("Login successful");

          setShowLogin(false);

          setData({
            name: "",
            email: "",
            password: "",
          });
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
    }
  };


  return (
    <div className="login-overlay">
      <div className="auth-box">
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          ×
        </button>

        <div className="auth-logo">
          TIME
          <span>BURGER & PIZZA</span>
        </div>

        {isRegister ? (
          // REGISTER
          <>
            <h2>Create Account</h2>

            <p className="auth-description">
              Join us and order your favorite food
            </p>

            <form onSubmit={onSubmitHandler}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                  placeholder="Full Name"
                />
              </div>

              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onChangeHandler}
                  placeholder="Email Address"
                />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={onChangeHandler}
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="auth-btn">
                CREATE ACCOUNT
              </button>
            </form>

            <p className="switch-text">
              Already have an account?
              <button type="button" onClick={() => setIsRegister(false)}>
                Login
              </button>
            </p>
          </>
        ) : (
          // LOGIN
          <>
            <h2>Welcome Back</h2>

            <p className="auth-description">Login to order fresh food</p>

            <form onSubmit={onSubmitHandler}>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onChangeHandler}
                  placeholder="Email Address"
                />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={onChangeHandler}
                  placeholder="Password"
                />
              </div>

              <div className="auth-options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="auth-btn">
                LOGIN
              </button>
            </form>

            <p className="switch-text">
              Don't have an account?
              <button type="button" onClick={() => setIsRegister(true)}>
                Create Account
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};;

export default Login;
