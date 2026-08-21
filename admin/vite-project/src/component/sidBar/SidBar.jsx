import "./sidBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SidBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add food" />
          <p>Add Food</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="Food list" />
          <p>Food List</p>
        </NavLink>

        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.parcel_icon} alt="Orders" />
          <p>Orders</p>
        </NavLink>

        <NavLink to="/user" className="sidebar-option">
          <img src={assets.profile_image} alt="Users" />
          <p>Users</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default SidBar;
