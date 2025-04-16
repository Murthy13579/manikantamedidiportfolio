import React from 'react';
import profilePic from '../assets/profile.jpg'; // Make sure image is in assets folder

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Manikanta Medidi"
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-blue-500"
          />
        </div>

        {/* About Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Me</h1>
          <p className="text-gray-700 text-justify leading-relaxed">
            I'm a passionate <strong>Java Full Stack Developer</strong> with a strong foundation in both front-end and back-end technologies. I build dynamic, responsive UIs using <strong>React.js</strong>, and scalable backend systems with <strong>Spring Boot</strong>, leveraging a microservices architecture. My technical arsenal includes databases like <strong>PostgreSQL</strong> and <strong>MySQL</strong>, cloud platforms such as <strong>AWS</strong> and <strong>Azure</strong>, and modern DevOps practices including <strong>CI/CD pipelines</strong> using <strong>GitHub Actions</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>.

I have hands-on experience with real-time data processing using <strong>Apache Kafka</strong>, and have integrated authentication & authorization using <strong>Spring Security</strong>. I'm also familiar with building and deploying <strong>AWS Lambda</strong> functions for serverless applications. My testing workflow includes tools like <strong>JUnit</strong> and <strong>Selenium</strong> for ensuring code quality.

Recently, I've been exploring <strong>AI and machine learning</strong> models, and love applying my knowledge to build intelligent, data-driven applications. I'm deeply committed to writing clean, maintainable code, learning new technologies, and delivering impactful software solutions that scale.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Technical Skills</h2>

          <div className="flex flex-col space-y-4 text-gray-700 text-justify">
            <p><strong>Languages & Frameworks:</strong> Java, Spring Boot, Spring Security, Hibernate, Python, React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
            <p><strong>Databases:</strong> PostgreSQL, MySQL</p>
            <p><strong>DevOps & Tools:</strong> Git, GitHub, GitHub Actions, Docker, Kubernetes, CI/CD pipelines</p>
            <p><strong>Cloud Platforms:</strong> AWS (including Lambda), Microsoft Azure</p>
            <p><strong>Testing:</strong> JUnit, Selenium</p>
            <p><strong>Messaging & Real-Time:</strong> Apache Kafka, RESTful APIs</p>
            <p><strong>Others:</strong> Microservices Architecture, OOPs Concepts, System Design, Machine Learning Basics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
