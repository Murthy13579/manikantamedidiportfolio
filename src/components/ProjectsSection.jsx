import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Java Spring Boot Job Board</h2>
            <p className="text-gray-600 mb-4 text-justify">
              Developed a full-stack job board application where candidates can browse and apply for jobs,
              while recruiters can post and manage listings. The frontend is built with <strong>React.js</strong> for a fast, responsive UI,
              and the backend uses <strong>Java Spring Boot</strong> with <strong>RESTful APIs</strong> and a <strong>MySQL</strong> database for structured job and user data.
              Implemented secure role-based access using <strong>Spring Security</strong>, and integrated <strong>Kafka</strong> for logging real-time application events.
              The system is containerized with <strong>Docker</strong> and deployed via a CI/CD pipeline using <strong>GitHub Actions</strong>.
              Backend unit testing was performed using <strong>JUnit</strong> and integration tested with <strong>Postman</strong>.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">React.js</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Spring Boot</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Kafka</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Spring Security</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Docker</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">GitHub Actions</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">JUnit</span>
            </div>
            <a
              href="https://github.com/Murthy13579/SpringProjectManikanta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Portfolio Website</h2>
            <p className="text-gray-600 mb-4 text-justify">
              Built and deployed a professional portfolio website to showcase projects and career achievements.
              Developed entirely using <strong>React.js</strong> with component-based architecture and styled using <strong>Tailwind CSS</strong> for responsive, modern UI.
              Integrated routing with <strong>React Router</strong>, typewriter animation with <strong>react-simple-typewriter</strong>, and animated effects using <strong>Framer Motion</strong>.
              The site is deployed via <strong>Netlify</strong> and hosted on a custom domain purchased via Ionos.
              It is mobile-responsive, optimized for performance, and includes animated scrolls, contact integrations, and clear navigation.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">React.js</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">React Router</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Netlify</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Custom Domain</span>
            </div>
            <a
              href="https://github.com/Murthy13579/manikantamedidiportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
