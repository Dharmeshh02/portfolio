import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
const App = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="footer">
        © 2026 Dharmesh. All rights reserved.
      </footer>
    </div>
  );
};

export default App;