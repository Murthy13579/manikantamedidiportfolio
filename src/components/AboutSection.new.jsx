import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import { FaUserCog, FaLightbulb, FaCloud, FaRobot, FaFlask, FaDatabase } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const AboutSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hover: { 
      scale: 1.02,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const skillCategories = [
    {
      icon: <FaLightbulb className="text-blue-500" />,
      title: "Languages & Frameworks",
      skills: ["Java 17", "Spring Boot 3", "Spring Security", "Hibernate", "Python", "React.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: <FaCloud className="text-blue-500" />,
      title: "Cloud & DevOps",
      skills: ["AWS (ECS, Lambda)", "Azure (AKS, Functions)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"]
    },
    {
      icon: <FaRobot className="text-blue-500" />,
      title: "AI & Automation",
      skills: ["LangChain4j", "OpenAI APIs", "Hugging Face", "GenAI Integration", "ML Pipelines"]
    },
    {
      icon: <FaDatabase className="text-blue-500" />,
      title: "Databases & Messaging",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "gRPC"]
    },
    {
      icon: <FaFlask className="text-blue-500" />,
      title: "Testing & Quality",
      skills: ["JUnit", "TestNG", "Selenium", "REST Assured", "SonarQube"]
    }
  ];

  const filteredSkillCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  const coreFocusAreas = [
    {
      icon: "🧠",
      title: "AI-Powered Systems",
      description: "Integrating LLMs and GenAI in Java applications"
    },
    {
      icon: "☁️",
      title: "Cloud-Native Microservices",
      description: "Deployed on AWS & Azure using Spring Boot 3 and Terraform"
    },
    {
      icon: "⚡",
      title: "Real-Time Platforms",
      description: "Engineered for 1M+ transactions/day with 99.98% uptime"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative"
    >
      {/* Scroll Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-blue-600 font-medium text-lg">
            4+ Years | Java Full Stack Developer | Spring Boot • React/Angular • GenAI Integration | Cloud & Microservices
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants} 
            className="lg:w-1/3 mx-auto lg:mx-0"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={profileImage} 
                alt="Manikanta - Full Stack Developer" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            variants={itemVariants} 
            className="lg:w-2/3"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaUserCog className="text-3xl text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="space-y-6 text-lg text-gray-600">
                <motion.p variants={itemVariants}>
                  I'm a Java Full Stack Engineer with 4+ years of experience designing, developing, and scaling enterprise-grade software solutions. My expertise spans Spring Boot 3 microservices, React & Angular frontends, and cloud-native architectures deployed on AWS and Azure.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I specialize in building high-performance backend systems using Java 17, Kafka, and REST/gRPC that power real-time, event-driven platforms handling 1M+ transactions daily. On the frontend, I craft responsive, data-driven dashboards that transform complex data pipelines into actionable insights.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Recently, I've been integrating Generative AI and LLMs (LangChain4j, OpenAI APIs) into Java microservices to automate analytics, enhance recommendations, and bring intelligence to enterprise systems.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Focus Areas */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFocusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div variants={itemVariants} className="space-y-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-2xl text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Technical Skills
              </h2>
            </div>
            <div className="relative">
              <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Technologies I work with daily..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 w-64 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`bg-gradient-to-br ${
                  index % 2 === 0 ? 'from-blue-50 to-white' : 'from-white to-blue-50'
                } rounded-xl p-6 border border-gray-100 transform transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-blue-600">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white text-blue-700 text-sm px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;