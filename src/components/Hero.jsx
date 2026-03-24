import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/me.png"; // 👈 apni image path

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* LEFT */}
      <div className="hero-left">
        <p className="small-title">Hello, I'm</p>

        <h1>
          Dharmesh <span>Malviya</span>
        </h1>

        <h2>🚀 React Developer</h2>

        <p className="hero-text">
          I build modern, responsive, and high-performance web applications 
          with clean UI & great user experience.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Hire Me
          </a>

          <a
            href="/Dharmesh-Resume-FD (1).pdf"
            target="_blank"
            className="btn secondary-btn"
          >
            Download CV
          </a>
        </div>

        {/* SOCIAL */}
        <div className="social-links">
          <a href="https://github.com/Dharmeshh02" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/dharmeshmalviya4" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:dharmeshmalviya4@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE CARD */}
      <div className="profile-card">
        <div className="profile-img-wrapper">
          <img src={profileImg} alt="Dharmesh" />
        </div>

        <h3>Dharmesh</h3>
        <p>React Developer</p>
      </div>
    </section>
  );
};

export default Hero;