// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css'; // Import your CSS file

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <p>
        Java Full Stack Developer with expertise in both front-end and back-end development. Proficient in React.js for building dynamic user interfaces and Java Spring Boot for developing robust backend systems. Skilled in PostgreSQL, MySQL, AWS, Azure, microservices architecture, and system design. Passionate about creating scalable, efficient applications and eager to continue learning and contributing to impactful projects.
      </p>

      <h2>Technical Skills</h2>
      <ul className="tech-skills">
        <li><strong>Backend:</strong> Java (Core, Spring Boot, Hibernate), REST APIs, JDBC, PostgreSQL, MySQL, Python, Maven</li>
        <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript, React.js, System Design, Microservices</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>DevOps & Deployment:</strong> GitHub Actions, Docker, Cloud Deployment (AWS, Azure)</li>
      </ul>
    </section>
  );
};

export default AboutSection;
