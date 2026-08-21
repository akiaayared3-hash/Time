import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your backend API call or email service here if needed
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="contact-main-container">
      {/* Header Block */}
      <div className="contact-header-text">
        <span className="sub-heading">GET IN TOUCH</span>
        <h1 className="main-title">We'd Love to Hear From You</h1>
        <p className="header-desc">
          Have a question about our menu, catering services, or want to leave
          feedback? Drop us a message below.
        </p>
      </div>

      {/* Two Column Grid: Form + Info/Map */}
      <div className="contact-grid-layout">
        {/* Column 1: Interactive Form Area */}
        <section className="form-wrapper-card">
          {submitted ? (
            <div className="success-message-box">
              <span style={{ fontSize: "2rem" }}>🎉</span>
              <h3>Thank you for reaching out!</h3>
              <p>We have received your message and will reply shortly.</p>
            </div>
          ) : (
            <form className="interactive-contact-form" onSubmit={handleSubmit}>
              <div className="input-field-group">
                <label htmlFor="user-name">Full Name</label>
                <input
                  type="text"
                  id="user-name"
                  name="name"
                  value={formData.name}
                  onChange={onChangeHandler}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="user-email">Email Address</label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="message-subject">Subject</label>
                <input
                  type="text"
                  id="message-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onChangeHandler}
                  placeholder="How can we help you?"
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="user-message">Your Message</label>
                <textarea
                  id="user-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={onChangeHandler}
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-message-btn">
                SEND MESSAGE
              </button>
            </form>
          )}
        </section>

        {/* Column 2: Informational Block & Map Placeholder */}
        <section className="info-and-map-panel">
          {/* Live Details Row */}
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

          {/* Visual Map Placeholder Component */}
          <div className="location-map-wrapper">
            <div className="map-placeholder-bg">
              <div className="map-graphics-overlay">
                <span className="map-pin-indicator">📍</span>
                <p className="map-location-label">Debre Berhan, Ethiopia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
