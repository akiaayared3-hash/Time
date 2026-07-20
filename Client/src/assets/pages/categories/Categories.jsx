import './catagories.css'

const Categories = () => {
  return (
    <>
      <main>
   {/* Hero Section  */}
  <section className="hero-section">
    <div className="container hero-container">
      <div className="hero-content">
        <p className="tagline">FRESH &bull; FAST &bull; DELICIOUS</p>
        <h1 className="hero-title">TIME <span>BURGER & PIZZA</span></h1>
        <p className="hero-description">
          We serve the best burgers and pizza made with fresh ingredients every day.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">ORDER NOW &rarr;</a>
          <a href="#" className="btn btn-outline">VIEW MENU &rarr;</a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img src="../../../../public/image/catagory banner.avif" alt="TIME Burger & Pizza Hero" className="hero-img" />
      </div>
    </div>
  </section>

   {/* Features Bar  */}
  <section className="features-bar">
    <div className="container features-grid">
      <div className="feature-item">
        <span className="feature-icon">🍔</span>
        <div>
          <h3>FRESH INGREDIENTS</h3>
          <p>Quality you can taste</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🛵</span>
        <div>
          <h3>FAST DELIVERY</h3>
          <p>Quick to your door</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">⭐</span>
        <div>
          <h3>BEST QUALITY</h3>
          <p>Premium ingredients</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">❤️</span>
        <div>
          <h3>CUSTOMER LOVE</h3>
          <p>Thousands of happy customers</p>
        </div>
      </div>
    </div>
  </section>

   {/* Category Navigation  */}
  <section className="categories-section">
    <div className="container categories-grid">
      <a href="#" className="category-card">
        <span className="category-icon">🍔</span>
        <span>Burgers</span>
      </a>
      <a href="#" className="category-card">
        <span className="category-icon">🍕</span>
        <span>Pizza</span>
      </a>
      <a href="#" className="category-card">
        <span className="category-icon">🍟</span>
        <span>Fries</span>
      </a>
      <a href="#" className="category-card">
        <span className="category-icon">🥤</span>
        <span>Drinks</span>
      </a>
      <a href="#" className="category-card">
        <span className="category-icon">🍰</span>
        <span>Desserts</span>
      </a>
    </div>
  </section>

   {/* Best Sellers Section  */}
  <section className="products-section">
    <div className="container">
      <div className="section-header">
        <div>
          <span className="sub-title">OUR BEST SELLERS</span>
          <h2 className="section-title">Best Sellers</h2>
        </div>
        <a href="#" className="btn-link">VIEW ALL MENU &rarr;</a>
      </div>

      <div className="products-grid">
         {/* Card 1  */}
        <article className="product-card">
          <div className="card-image-wrap">
            <span className="badge">BEST SELLER</span>
            <img src="../../../../public/image/catagory one.avif" alt="Time Special Burger" />
          </div>
          <div className="card-body">
            <h3 className="product-title">Time Special Burger</h3>
            <div className="product-info">
              <span className="rating">★ 4.8 (230)</span>
              <span className="price">850 <span>ETB</span></span>
            </div>
            <button className="btn btn-primary btn-full">ADD TO CART</button>
          </div>
        </article>

        {/* Card 2  */}
        <article className="product-card">
          <div className="card-image-wrap">
            <span className="badge badge-accent">HOT</span>
            <img src="../../../../public/image/catagory two.avif" alt="Chicken Pizza" />
          </div>
          <div className="card-body">
            <h3 className="product-title">Chicken Pizza</h3>
            <div className="product-info">
              <span className="rating">★ 4.7 (196)</span>
              <span className="price">650 <span>ETB</span></span>
            </div>
            <button className="btn btn-primary btn-full">ADD TO CART</button>
          </div>
        </article>

         {/* Card 3  */}
        <article className="product-card">
          <div className="card-image-wrap">
            <img src="../../../../public/image/photo-1568901346375-23c9450c58cd.avif" alt="Double Burger" />
          </div>
          <div className="card-body">
            <h3 className="product-title">Double Burger</h3>
            <div className="product-info">
              <span className="rating">★ 4.6 (150)</span>
              <span className="price">1,200 <span>ETB</span></span>
            </div>
            <button className="btn btn-primary btn-full">ADD TO CART</button>
          </div>
        </article>

         {/* Card 4 */}
        <article className="product-card">
          <div className="card-image-wrap">
            <img src="../../../../public/image/catagory four.avif" alt="French Fries" />
          </div>
          <div className="card-body">
            <h3 className="product-title">French Fries</h3>
            <div className="product-info">
              <span className="rating">★ 4.5 (98)</span>
              <span className="price">200 <span>ETB</span></span>
            </div>
            <button className="btn btn-primary btn-full">ADD TO CART</button>
          </div>
        </article>
      </div>
    </div>
  </section>
</main>
    </>
  )
}

export default Categories
