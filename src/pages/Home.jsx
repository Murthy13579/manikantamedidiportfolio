import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ use from react-router-dom now

const Home = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-20 bg-repeat z-0" />

      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm z-10" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm Manikanta
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
          <Typewriter
            words={[
              "Java Full Stack Developer",
              "React.js Enthusiast",
              "Spring Boot Specialist",
              "Open to Opportunities 💼",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
  I’m a <strong>Full Stack Developer</strong> skilled in <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>React.js</strong>, with hands-on experience in building cloud-native applications using <strong>AWS</strong>, <strong>Azure</strong>, <strong>PostgreSQL</strong>, <strong>Kafka</strong>, and <strong>CI/CD pipelines</strong>.
</p>



        {/* ✅ Button now routes to /projects using React Router */}
        <Link to="/projects">
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg shadow-md transition-all">
            View My Work
          </button>
        </Link>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <FaChevronDown size={32} className="text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Home;
