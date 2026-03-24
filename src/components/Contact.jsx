import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <h2>Contact</h2>
      </div>

      <div className="contact-grid">
        {/* LEFT - INFO */}
     <div className="card contact-info">
  <h3>Get in Touch</h3>

  <div className="contact-item">
    <FaEnvelope className="icon" />
    <div>
      <span>Email</span>
      <p>dharmeshmalviya4@gmail.com</p>
    </div>
  </div>

  <div className="contact-item">
    <FaPhone className="icon" />
    <div>
      <span>Phone</span>
      <p>+91 97533 91386</p>
    </div>
  </div>

  <div className="contact-item">
    <FaMapMarkerAlt className="icon" />
    <div>
      <span>Location</span>
      <p>India</p>
    </div>
  </div>

  <div className="contact-social">
    <a href="https://github.com/Dharmeshh02" target="_blank" rel="noreferrer">
      GitHub
    </a>

    <a href="https://linkedin.com/in/dharmeshmalviya4" target="_blank" rel="noreferrer">
      LinkedIn
    </a>
  </div>
</div>

        {/* RIGHT - FORM */}
     <div className="card contact-form">
  <h3>Send Message</h3>

  <form className="form">
    <div className="input-group">
      <input type="text" placeholder=" " required />
      <label>Your Name</label>
    </div>

    <div className="input-group">
      <input type="email" placeholder=" " required />
      <label>Your Email</label>
    </div>

    <div className="input-group">
      <textarea placeholder=" " rows="5" required></textarea>
      <label>Your Message</label>
    </div>

    <button className="btn primary-btn send-btn">
      Send Message 🚀
    </button>
  </form>
</div>
      </div>
    </section>
  );
};

export default Contact;