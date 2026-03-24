import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="card about-card">
          <p className="about-intro">
            👋 I’m a <span>Frontend Developer</span> with a B.Tech in Information Technology 
            from Mahakal Institute of Technology, Ujjain.
          </p>

          <p>
            I specialize in building <span>clean, responsive, and interactive</span> 
            user interfaces using <span>React.js, Tailwind CSS, and JavaScript</span>.
          </p>

          <p>
            I have built real-world projects like <span>E-commerce platforms</span> 
            and <span>event management portals</span>, focusing on performance and user experience.
          </p>

          <p>
            I love turning <span>ideas into real products</span> and constantly explore 
            new technologies to stay ahead.
          </p>

          <p className="highlight">
            🚀 Currently looking for opportunities as a Frontend / MERN Developer.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="about-highlights">
          <div className="card highlight-card">
            <h3>🎓 Education</h3>
            <p>B.Tech - Information Technology</p>
          </div>

          <div className="card highlight-card">
            <h3>💻 Tech Stack</h3>
            <p>React • JavaScript • Tailwind • Node</p>
          </div>

          <div className="card highlight-card">
            <h3>🚀 Projects</h3>
            <p>E-commerce & Event Platforms</p>
          </div>

          <div className="card highlight-card">
            <h3>📈 Focus</h3>
            <p>UI/UX • Performance • Clean Code</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;