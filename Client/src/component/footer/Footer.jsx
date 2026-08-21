
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* Main Desktop & Mobile Standard Footer */}
      <footer className="text-white pt-5 pb-3 custom-footer">
        <div className="container">
          <div className="row gy-4">
            {/* Column 1: Brand Info & Socials */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <div className="logo-wrapper mb-3">
                <div className="logo-clock-top">
                  <span className="clock-pin"></span>
                </div>
                <div className="logo-title">
                  <span>T</span>
                  <span>I</span>
                  <span>M</span>
                  <span className="custom-e"></span>
                </div>
                <div className="logo-subtitle">BURGER & PIZZA</div>
              </div>

              <p className="footer-text mb-4">
                We serve the best burgers and pizza made with fresh ingredients
                every day.
              </p>
              <div className="d-flex gap-3 footer-socials justify-content-center justify-content-md-start">
                <a href="#facebook" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#tiktok" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="#telegram" aria-label="Telegram">
                  <i className="bi bi-telegram"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-lg-2 col-md-6 ps-lg-4 text-center text-md-start">
              <h5 className="footer-heading mb-3">QUICK LINKS</h5>
              <ul className="list-unstyled footer-links-list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Hours */}
            <div className="col-lg-2 col-md-6 text-center text-md-start">
              <h5 className="footer-heading mb-3">OUR HOURS</h5>
              <p className="footer-text mb-1 text-white">Mon - Sun</p>
              <p className="footer-text highlight-gold">8:00 AM - 10:00 PM</p>
            </div>

            {/* Column 4: Contact Us */}
            <div className="col-lg-2 col-md-6 text-center text-md-start">
              <h5 className="footer-heading mb-3">CONTACT US</h5>
              <p className="footer-text mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-telephone fill-icon me-2"></i>+251 9XX XX
                XXXX
              </p>
              <p className="footer-text mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-envelope fill-icon me-2"></i>
                timeburgerpizza@gmail.com
              </p>
              <p className="footer-text d-flex align-items-start justify-content-center justify-content-md-start">
                <i className="bi bi-geo-alt fill-icon me-2 mt-1"></i>Debre
                Berhan, Ethiopia
              </p>
            </div>

            {/* Column 5: Newsletter */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <h5 className="footer-heading mb-3">NEWSLETTER</h5>
              <p className="footer-text mb-3">
                Subscribe and get special offers and updates.
              </p>
              <form
                className="input-group footer-newsletter-form justify-content-center justify-content-md-start"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button className="btn btn-gold" type="submit">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </form>
            </div>
          </div>

          <hr className="footer-divider my-4" />

          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright-text mb-0">
                &copy; {new Date().getFullYear()} TIME Burger & Pizza. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
