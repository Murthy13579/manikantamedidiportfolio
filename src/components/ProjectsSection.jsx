import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project-item">
          <h2>Project 1</h2>
          <p>Description of Project 1...</p>
          <a
            href="https://github.com/yourgithubusername/project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View Project on GitHub</button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <h2>Project 2</h2>
          <p>Description of Project 2...</p>
          <a
            href="https://github.com/yourgithubusername/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">View Project on GitHub</button>
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <h2>Project 3</h2>
          <p>Description of Project 3...</p>
          <a
            href="https://github.com/yourgithubusername/project3"
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
