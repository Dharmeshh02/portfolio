import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "80%" },
        { name: "React.js", level: "85%" },
        { name: "Tailwind CSS", level: "80%" },
        { name: "Bootstrap", level: "75%" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "75%" },
        { name: "Express.js", level: "70%" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: "75%" },
        { name: "MySQL", level: "70%" },
        { name: "Git", level: "80%" },
        { name: "GitHub", level: "85%" },
        { name: "Postman", level: "75%" },
      ],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="card" key={index}>
            <h3>{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;