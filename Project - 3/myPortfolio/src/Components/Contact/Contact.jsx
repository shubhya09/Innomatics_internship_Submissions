import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title1">Get in Touch</h2>
        <p className="contact-subtitle">We would love to hear from you!</p>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span>+91 178797973</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span>shubham@example.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Address:</span>
              <span>Hinjewadi, Wakad, Pune</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <textarea placeholder="Your Message" rows="4" className="contact-textarea"></textarea>
            <button className="contact-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;