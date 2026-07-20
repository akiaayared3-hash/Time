import './index.css'



const Index = () => {
  return (
    <>
      <main className="hero-section">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-5 col-12 hero-text-area d-flex align-items-center">
              <div className="hero-text-content w-100">
                <span className="hero-tagline text-uppercase">
                  Fresh &bull; Fast &bull; Delicious
                </span>
                <h1 className="hero-main-title">
                  TIME
                  <br />
                  <span className="brand-gold-text">BURGER & PIZZA</span>
                </h1>
                <div className="title-separator-icon mb-4">
                  <i className="bi bi-egg-fried"></i>
                </div>
                <p className="hero-subtext">
                  We serve the best burgers and pizza made with fresh
                  ingredients every day.
                </p>
                <div className="hero-action-buttons d-flex gap-3">
                  <a href="#menu" className="btn btn-brand-red text-uppercase">
                    Order Now <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                  <a
                    href="#menu"
                    className="btn btn-outline-brand-gold text-uppercase"
                  >
                    View Menu <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-12 hero-graphic-area">
              <div className="hero-brush-edge"></div>
              <img
                src="../../../public/image/photo-1568901346375-23c9450c58cd.avif"
                alt="Premium Time Burger"
                className="hero-display-img"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="info-features-row py-4">
        <div className="container">
          <div className="row text-center gy-4 gy-md-0 justify-content-center">
            <div className="col-md-3 col-6 feature-item-col">
              <div className="feature-inline-box">
                <div className="feature-icon">
                  <i className="bi bi-egg-fried"></i>
                </div>
                <div className="feature-text text-start">
                  <h6 className="text-uppercase fw-bold mb-0">Fresh Ingredients</h6>
                  <p className="mb-0 text-muted">Quality you can taste</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 feature-item-col">
              <div className="feature-inline-box">
                <div className="feature-icon">
                  <i className="bi bi-scooter"></i>
                </div>
                <div className="feature-text text-start">
                  <h6 className="text-uppercase fw-bold mb-0">Fast Delivery</h6>
                  <p className="mb-0 text-muted">Quick to your door</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 feature-item-col">
              <div className="feature-inline-box">
                <div className="feature-icon">
                  <i className="bi bi-patch-check"></i>
                </div>
                <div className="feature-text text-start">
                  <h6 className="text-uppercase fw-bold mb-0">Best Quality</h6>
                  <p className="mb-0 text-muted">Premium ingredients</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 feature-item-col">
              <div className="feature-inline-box">
                <div className="feature-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="feature-text text-start">
                  <h6 className="text-uppercase fw-bold mb-0">Customer Love</h6>
                  <p className="mb-0 text-muted">Thousands of happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOBILE-ONLY CATEGORIES TRACK */}

      <div className="d-block d-md-none mobile-category-nav py-3">
        <div className="container">
          <div className="d-flex gap-3 justify-content-between text-center overflow-x-auto pb-2">
            <div className="category-pill-item active">
              <div className="pill-icon-box">
                <i className="bi bi-egg-fried"></i>
              </div>
              <span className="small fw-bold">Burgers</span>
            </div>
            <div className="category-pill-item">
              <div className="pill-icon-box">
                <i className="bi bi-disc"></i>
              </div>
              <span className="small fw-bold">Pizza</span>
            </div>
            <div className="category-pill-item">
              <div className="pill-icon-box">
                <i className="bi bi-grid-3x3-gap"></i>
              </div>
              <span className="small fw-bold">Fries</span>
            </div>
            <div className="category-pill-item">
              <div className="pill-icon-box">
                <i className="bi bi-cup-straw"></i>
              </div>
              <span className="small fw-bold">Drinks</span>
            </div>
            <div className="category-pill-item">
              <div className="pill-icon-box">
                <i className="bi bi-cake2"></i>
              </div>
              <span className="small fw-bold">Desserts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BEST SELLERS PRODUCT GRID */}

      <section id="menu" className="best-sellers-section py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="text-uppercase tracking-wider section-tag-red fw-bold">
                Our Best Sellers
              </span>
              <h2 className="section-main-title fw-bold mb-0">Best Sellers</h2>
            </div>
            <a
              href="#specials"
              className="btn btn-outline-brand-gold text-uppercase d-none d-md-inline-block"
            >
              View All Menu <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>

          <div className="row g-4">
            {/*  Item 1  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <span className="badge position-absolute custom-product-badge text-uppercase">
                    Best Seller
                  </span>
                  <img
                    src="../../../public/image/item one.avif"
                    className="product-card-img"
                    alt="Time Special Burger"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">
                      Time Special Burger
                    </h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      850 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.8 (230)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/*  Item 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <span className="badge position-absolute custom-product-badge text-uppercase">
                    Hot
                  </span>
                  <img
                    src="../../../public/image/item two.avif"
                    className="product-card-img"
                    alt="Chicken Pizza"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">Chicken Pizza</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      650 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.7 (196)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Item 3  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <img
                    src="../../../public/image/item three.avif"
                    className="product-card-img"
                    alt="Double Burger"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">Double Burger</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      1,200 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.6 (150)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Item 4  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <img
                    src="../../../public/image/item four.avif"
                    className="product-card-img"
                    alt="French Fries"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">French Fries</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      200 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.5 (98)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 d-block d-md-none">
            <a
              href="#specials"
              className="btn btn-outline-brand-gold text-uppercase px-4"
            >
              View All Menu <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 4. BEST SELLERS PRODUCT GRID (EXPANDED TO 8 ITEMS) */}

      <section id="menu" className="best-sellers-section py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="text-uppercase tracking-wider section-tag-red fw-bold">
                Our Best Sellers
              </span>
              <h2 className="section-main-title fw-bold mb-0">Best Sellers</h2>
            </div>
            <a
              href="#specials"
              className="btn btn-outline-brand-gold text-uppercase d-none d-md-inline-block"
            >
              View All Menu <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>

          <div className="row g-4">
            {/* Item 5: Time Special Burger */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <span className="badge position-absolute custom-product-badge text-uppercase">
                    Best Seller
                  </span>
                  <img
                    src="../../../public/image/item five.avif"
                    className="product-card-img"
                    alt="Time Special Burger"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">
                      Time Special Burger
                    </h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      850 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.8 (230)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Item 6: Chicken Pizza  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <span className="badge position-absolute custom-product-badge text-uppercase">
                    Hot
                  </span>
                  <img
                    src="../../../public/image/item six.avif"
                    className="product-card-img"
                    alt="Chicken Pizza"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">Chicken Pizza</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      650 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.7 (196)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Item 7: Double Burger  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <img
                    src="../../../public/image/item seven.avif"
                    className="product-card-img"
                    alt="Double Burger"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">Double Burger</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      1,200 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.6 (150)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Item 8: French Fries  */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card food-product-card h-100">
                <div className="product-img-frame">
                  <img
                    src="../../../public/image/item eghit.avif"
                    className="product-card-img"
                    alt="French Fries"
                  />
                </div>
                <div className="card-body product-card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h5 className="product-title mb-0 fw-bold">French Fries</h5>
                    <span className="product-price-tag fw-bold text-nowrap">
                      200 <span className="currency-text">ETB</span>
                    </span>
                  </div>
                  <div className="star-rating-box mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="rating-count text-muted small ms-1">
                      4.5 (98)
                    </span>
                  </div>
                  <button className="btn btn-brand-red btn-sm w-100 mt-auto text-uppercase fw-bold py-2">
                    <i className="bi bi-cart3 me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 d-block d-md-none">
              <a
                href="#specials"
                className="btn btn-outline-brand-gold text-uppercase px-4"
              >
                View All Menu <i className="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Index