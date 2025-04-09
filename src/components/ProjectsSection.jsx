import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project-item">
          <h2>Java Spring Project</h2>
          <p>It is an Job application board project</p>
          <a
            href="https://github.com/Murthy13579/SpringProjectManikanta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View Project on GitHub</button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <h2>React JS Project</h2>
          <p>It is my own website that I have created to showcase my portfolio</p>
          <a
            href="https://github.com/Murthy13579/manikantamedidiportfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View Project on GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
