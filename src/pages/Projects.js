import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Projects.css';

const projects = [
  {
    title: "InvestTrack",
    description:
      "InvestTrack is a financial app for startups to track funding, manage investors, and handle budgeting. It helps with planning, compliance, and building investor trust, supporting growth and fundraising.",
    image: "InvestTrack.png",
    link: "https://investtrack-ten.vercel.app/",
    github: "https://github.com/example/investtrack",
    techStack: ["Javascript", "ReactJS", "NestJS", "TypeScript", "CSS", "MySQL"],
  },
  {
    title: "Pet Society",
    description:
      "Pet Society is a platform that connects adoptable pets with loving families. It simplifies the adoption process by allowing users to view and apply for animals from multiple rescues in one place.",
    image: "PetSociety.png", 
    link: "",
    github: "https://github.com/XenoviaaaFritzyyy/pet-society.git",
    techStack: ["Javascript", "Java", "ReactJS", "Spring Boot", "HTML", "CSS", "MySQL"],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Projects I worked on during coursework, collaborating with my group to showcase our skills.
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {/* Tech Stack Section */}
            <div className="project-tech-box">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links Section */}
            <div className="project-links">
              <a href={project.link || "#"}
                className={`project-link ${!project.link ? "disabled" : ""}`}
                target={project.link ? "_blank" : ""}
                rel={project.link ? "noopener noreferrer" : ""}
                title={project.link ? "View Deployed Project" : "No Link Available"}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href={project.github || "#"}
                className={`project-link ${!project.github ? "disabled" : ""}`}
                target={project.github ? "_blank" : ""}
                rel={project.github ? "noopener noreferrer" : ""}
                title={project.github ? "View GitHub Repository" : "No Link Available"}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;