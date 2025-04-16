import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Work Experience
        </h1>

        <div className="bg-gray-50 border-l-4 border-blue-500 shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Graduate Teaching Assistant</h2>
          <p className="text-sm text-gray-600 mb-4">
            <strong>University of North Texas, Denton</strong> | August 2024 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Assisted students with Java programming, SQL, and debugging Spring Boot applications.</li>
            <li>Helped with fundamental data structures and algorithm concepts for coursework.</li>
            <li>Provided support in understanding REST API development and database management.</li>
            <li>Contributed to research projects focused on software development and data analysis.</li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-purple-500 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Software Engineer</h2>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Gensol Infotech, Bangalore</strong> | June 2022 - August 2023
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Developed and maintained Java Spring Boot-based backend services.</li>
            <li>Designed RESTful APIs for efficient data communication between frontend and backend.</li>
            <li>Worked with PostgreSQL & MySQL databases for data storage and retrieval.</li>
            <li>Wrote unit tests using JUnit to ensure software reliability.</li>
            <li>Participated in code reviews and debugging to enhance application performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
