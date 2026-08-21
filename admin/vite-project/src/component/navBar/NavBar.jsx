import "./navBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-brand">
        <img className="admin-logo" src={assets.logo} alt="Logo" />

        <span>TIME Admin</span>
      </div>

      <div className="admin-profile">
        <img
          className="profile-image"
          src={assets.profile_image}
          alt="Admin profile"
        />

        <div className="profile-info">
          <h4>Admin</h4>
          <p>Manager</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
