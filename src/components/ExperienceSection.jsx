import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <h1>Work Experience</h1>
      <div className="experience-item">
        <h2>Graduate Teaching Assistant</h2>
        <p><strong>University of North Texas, Denton | August 2024 - Present</strong></p>
        <ul>
          <li>Assisted students with Java programming, SQL, and debugging Spring Boot applications.</li>
          <li>Helped with fundamental data structures and algorithm concepts for coursework.</li>
          <li>Provided support in understanding REST API development and database management.</li>
          <li>Involved in research projects with professors, contributing to software development and data analysis.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h2>Software Engineer</h2>
        <p><strong>Gensol Infotech, Bangalore | June 2022 - August 2023</strong></p>
        <ul>
          <li>Developed and maintained Java Spring Boot-based backend services.</li>
          <li>Designed RESTful APIs for efficient data communication between frontend and backend.</li>
          <li>Worked with PostgreSQL & MySQL databases for data storage and retrieval.</li>
          <li>Assisted in writing unit tests using JUnit to ensure software reliability.</li>
          <li>Participated in code reviews and debugging to enhance application performance.</li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
