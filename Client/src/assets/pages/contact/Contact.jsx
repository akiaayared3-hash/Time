import './contact.css'

const Contact = () => {
  return (
    <>

     {/* Main Contact Content Wrapper */}
     
  <main className="contact-main-container">
    
     {/* Header Block  */}
    <div className="contact-header-text">
      <span className="sub-heading">GET IN TOUCH</span>
      <h1 className="main-title">We'd Love to Hear From You</h1>
      <p className="header-desc">Have a question about our menu, catering services, or want to leave feedback? Drop us a message below.</p>
    </div>

     {/* Two Column Grid Grid: Form + Info/Map  */}
    <div className="contact-grid-layout">
      
       {/* Column 1: Interactive Form Area  */}
      <section className="form-wrapper-card">
        <form className="interactive-contact-form" action="#" method="POST">
          <div className="input-field-group">
            <label for="user-name">Full Name</label>
            <input type="text" id="user-name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="input-field-group">
            <label for="user-email">Email Address</label>
            <input type="email" id="user-email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="input-field-group">
            <label for="message-subject">Subject</label>
            <input type="text" id="message-subject" name="subject" placeholder="How can we help you?" />
          </div>

          <div className="input-field-group">
            <label for="user-message">Your Message</label>
            <textarea id="user-message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
          </div>

          <button type="submit" className="send-message-btn">SEND MESSAGE</button>
        </form>
      </section>

       {/* Column 2: Informational Block & Map Placeholder  */}
      <section className="info-and-map-panel">
        
         {/* Live Details Row  */}
        <div className="quick-contact-details">
          <div className="detail-block-item">
            <span className="detail-icon">📞</span>
            <div className="detail-text">
              <h4>Call Us</h4>
              <p>+251 9XX XX XXXX</p>
            </div>
          </div>

          <div className="detail-block-item">
            <span className="detail-icon">✉️</span>
            <div className="detail-text">
              <h4>Email Support</h4>
              <p>timeburgerpizza@gmail.com</p>
            </div>
          </div>
        </div>

         {/* Visual Map Placeholder Component  */}
        <div className="location-map-wrapper">
          <div className="map-placeholder-bg">
            <div className="map-graphics-overlay">
              <span className="map-pin-indicator">📍</span>
              <p className="map-location-label">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
    </>
  )
}

export default Contact