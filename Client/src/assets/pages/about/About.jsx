import './about.css'

const About = () => {
  return (
    <>
     
     {/* Main About Section */}
     
  <main class="about-container">
    
     {/* Section 1: Story / Intro Block  */}

    <section class="about-story">
      <div class="story-content">
        <span class="sub-heading">OUR STORY</span>
        <h1 class="main-heading">Serving Passion & Flavor Since Day One</h1>
        <p class="story-text">
          At TIME Burger & Pizza, we believe that great food brings people together. What started as a simple passion for creating the perfect burger has grown into a beloved destination for food lovers. We take pride in sourcing the freshest ingredients, hand-crafting every patty, and baking our pizzas to perfection in traditional stone ovens.
        </p>
        <p class="story-text">
          Every meal we serve is crafted with dedication, precision, and an unwavering commitment to quality. Whether you are here for a quick lunch or celebrating a special moment with family, we ensure your time with us is delicious.
        </p>
      </div>
      <div class="story-image-box">

         {/* Replace with your actual image path  */}

        <img src="../../../../public/image/item one.avif" alt="Our Signature Burger Crafting" class="featured-img" />
      </div>
    </section>

    <hr class="section-divider" />

     {/* Section 2: Core Values Grid  */}
    <section class="about-values">
      <div class="center-title">
        <span class="sub-heading">WHAT DRIVES US</span>
        <h2 class="section-title">Our Core Values</h2>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon-circle">
            <img src="../../../../public/image/about 2.avif" alt="Quality Ingredients" />
          </div>
          <h3>Uncompromised Quality</h3>
          <p>We select only premium meats, locally sourced vegetables, and artisanal cheeses for every recipe.</p>
        </div>

        <div class="value-card">
          <div class="value-icon-circle">
            <img src="../../../../public/image/about the  third.avif" alt="Customer Love" />
          </div>
          <h3>Customer First</h3>
          <p>Your satisfaction is our ultimate goal. We strive to provide a welcoming and memorable experience.</p>
        </div>

        <div class="value-card">
          <div class="value-icon-circle">
            <img src="../../../../public/image/abot the fourth.avif" alt="Fast Service" />
          </div>
          <h3>Fresh & Fast</h3>
          <p>Great food shouldn't make you wait. We balance speed with culinary excellence every day.</p>
        </div>
      </div>
    </section>

  </main>

    </>
  )
}

export default About
