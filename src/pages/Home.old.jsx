import React from "react";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-10 bg-repeat z-0" />

      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm z-10" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Hi, I'm Manikanta
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-700 font-medium mb-6"
        >
          <Typewriter
            words={[
              "Java Full Stack Developer",
              "Cloud & DevOps Engineer",
              "Spring Boot Specialist",
              "React.js Expert"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I'm a <strong className="text-blue-600">Full Stack Developer</strong> who built real-time trading platforms processing <strong className="text-blue-600">1M+ transactions daily</strong> with <strong className="text-blue-600">99.98% uptime</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-all"
            >
              <h3 className="text-blue-600 font-semibold mb-2">Backend Excellence</h3>
              <p className="text-gray-700">Architected distributed systems with Java, Spring Boot, and Kafka achieving sub-second latency</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-all"
            >
              <h3 className="text-blue-600 font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-700">Deployed on AWS & Azure with automated CI/CD reducing deployment time by 40%</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-all"
            >
              <h3 className="text-blue-600 font-semibold mb-2">Frontend Innovation</h3>
              <p className="text-gray-700">Built responsive UIs with React & Angular handling real-time data visualization</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-all"
            >
              <h3 className="text-blue-600 font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-700">Integrated GenAI & LLMs for personalized analytics and recommendations</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link 
            to="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg shadow-md transition-all flex items-center space-x-2 hover:scale-105"
          >
            <span>View My Work</span>
          </Link>
          
          <a 
            href="https://github.com/Murthy13579" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-md transition-all hover:scale-105"
          >
            <FaGithub size={24} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/manikanta-medidi-17896a21a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all hover:scale-105"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        {/* Stats cards */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600">99.98%</div>
            <div className="text-gray-600">System Uptime</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600">1M+</div>
            <div className="text-gray-600">Daily Transactions</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600">40%</div>
            <div className="text-gray-600">Faster Deployments</div>
          </div>
        </motion.div>
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