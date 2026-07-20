import './footer.css'

const Footer = () => {
  return (
    <>
      {/* Main Desktop & Mobile Standard Footer */}
      <footer class="text-white pt-5 pb-3 custom-footer">
        <div class="container">
          <div class="row gy-4">
            {/* Column 1: Brand Info & Socials */}
            <div class="col-lg-3 col-md-6 text-center text-md-start">
              <div class="logo-wrapper mb-3">
                <div class="logo-clock-top">
                  <span class="clock-pin"></span>
                </div>
                <div class="logo-title">
                  <span>T</span>
                  <span>I</span>
                  <span>M</span>
                  <span class="custom-e"></span>
                </div>
                <div class="logo-subtitle">BURGER & PIZZA</div>
              </div>

              <p class="footer-text mb-4">
                We serve the best burgers and pizza made with fresh ingredients
                every day.
              </p>
              <div class="d-flex gap-3 footer-socials justify-content-center justify-content-md-start">
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i class="bi bi-tiktok"></i>
                </a>
                <a href="#">
                  <i class="bi bi-telegram"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links  */}

            <div class="col-lg-2 col-md-6 ps-lg-4 text-center text-md-start">
              <h5 class="footer-heading mb-3">QUICK LINKS</h5>
              <ul class="list-unstyled footer-links-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/categories">Categories</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Hours  */}
            <div class="col-lg-2 col-md-6 text-center text-md-start">
              <h5 class="footer-heading mb-3">OUR HOURS</h5>
              <p class="footer-text mb-1 text-white">Mon - Sun</p>
              <p class="footer-text highlight-gold">8:00 AM - 10:00 PM</p>
            </div>

            {/* Column 4: Contact Us */}

            <div class="col-lg-2 col-md-6 text-center text-md-start">
              <h5 class="footer-heading mb-3">CONTACT US</h5>
              <p class="footer-text mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i class="bi bi-telephone fill-icon me-2"></i>+251 9XX XX XXXX
              </p>
              <p class="footer-text mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i class="bi bi-envelope fill-icon me-2"></i>
                timeburgerpizza@gmail.com
              </p>
              <p class="footer-text d-flex align-items-start justify-content-center justify-content-md-start">
                <i class="bi bi-geo-alt fill-icon me-2 mt-1"></i>Addis Ababa,
                Ethiopia
              </p>
            </div>

            {/* Column 5: Newsletter  */}

            <div class="col-lg-3 col-md-6 text-center text-md-start">
              <h5 class="footer-heading mb-3">NEWSLETTER</h5>
              <p class="footer-text mb-3">
                Subscribe and get special offers and updates.
              </p>
              <form class="input-group footer-newsletter-form justify-content-center justify-content-md-start">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button class="btn btn-gold" type="submit">
                  <i class="bi bi-chevron-right"></i>
                </button>
              </form>
            </div>
          </div>

          <hr class="footer-divider my-4" />

          <div class="row">
            <div class="col-12 text-center">
              <p class="copyright-text mb-0">
                &copy; 2026 TIME Burger & Pizza. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR (Integrated Here) */}
      <nav class="navbar fixed-bottom bg-black d-lg-none mobile-bottom-nav">
        <div class="container-fluid justify-content-around">
          <a href="#" class="nav-item-bottom active">
            <i class="bi bi-house-door"></i>
            <span>Home</span>
          </a>

          <a href="#" class="nav-item-bottom">
            <i class="bi bi-grid"></i>
            <span>Category</span>
          </a>

          <a href="#" class="nav-item-bottom position-relative">
            <i class="bi bi-receipt"></i>
            <span class="badge rounded-pill bg-danger position-absolute top-0 start-50 translate-middle-y mobile-bottom-badge">
              2
            </span>
            <span>Order</span>
          </a>

          <a href="#" class="nav-item-bottom">
            <i class="bi bi-heart"></i>
            <span>Favorite</span>
          </a>

          <a href="#" class="nav-item-bottom">
            <i class="bi bi-person"></i>
            <span>Account</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Footer
