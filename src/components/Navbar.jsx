import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Dharmesh</div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-btn">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;