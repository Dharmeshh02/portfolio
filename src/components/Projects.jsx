import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio built using React with clean UI and smooth UX.",
      tech: ["React", "CSS", "JavaScript"],
      live: "https://my-project-xv52.vercel.app/",
      github: "https://github.com/Dharmeshh02",
    },
    {
      title: "Marketiq Info",
      desc: "Business / information website focused on modern UI, performance and responsive design.",
      tech: ["React", "CSS", "JavaScript"],
      live: "https://marketiqinfo.in/",
      github: "https://github.com/Dharmeshh02", // agar alag repo ho to yaha change kar
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card project-card" key={index}>
            
            {/* Image Placeholder */}
            <div className="project-image">
              🚀 Live Project
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {/* Tech Tags */}
            <div className="tags">
              {project.tech.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="project-buttons">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live <FaExternalLinkAlt />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link github"
              >
                Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
