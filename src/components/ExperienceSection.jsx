import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaServer, FaCloud, FaChartLine, FaRobot, FaShieldAlt, FaBolt, FaTools } from 'react-icons/fa';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const experiences = [
    {
      company: "Charles Schwab",
      location: "TX",
      role: "Software Engineer",
      summary: "Designing high-performance trading and analytics platforms with Java 17, Spring Boot 3, Kafka Streams, and GenAI integration.",
      period: "May 2024 – Present",
      highlights: [
        {
          icon: <FaServer className="text-blue-500" />,
          text: "Architected and scaled distributed, event-driven microservices using Java 17 and Spring Boot 3.x, deployed across AWS ECS and Azure AKS, supporting high-volume trade and risk workflows.",
          metric: "99.98% uptime",
          bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
          textColor: "text-blue-700"
        },
        {
          icon: <FaBolt className="text-indigo-500" />,
          text: "Built and optimized Kafka & Kafka Streams pipelines for real-time analytics and event ingestion, achieving sub-second latency and improving message throughput by 45%.",
          metric: "45% faster",
          bgColor: "bg-gradient-to-r from-indigo-50 to-indigo-100",
          textColor: "text-indigo-700"
        },
        {
          icon: <FaCloud className="text-cyan-500" />,
          text: "Delivered API ecosystem using REST, GraphQL and gRPC, secured with OAuth 2.1 and Spring Security, enabling seamless cross-service communication and reducing API errors by 30%.",
          metric: "30% fewer errors",
          bgColor: "bg-gradient-to-r from-cyan-50 to-cyan-100",
          textColor: "text-cyan-700"
        },
        {
          icon: <FaServer className="text-teal-500" />,
          text: "Implemented CI/CD and IaC automation with Terraform, AWS CDK and GitHub Actions, cutting release cycles by 40% and eliminating manual deployment risks.",
          metric: "40% faster releases",
          bgColor: "bg-gradient-to-r from-teal-50 to-teal-100",
          textColor: "text-teal-700"
        },
        {
          icon: <FaRobot className="text-purple-500" />,
          text: "Integrated LLM-powered modules (LangChain4j + OpenAI APIs) within Java microservices for behavioral analytics and personalized trade insights, improving decision accuracy by 25%.",
          metric: "25% more accurate",
          bgColor: "bg-gradient-to-r from-purple-50 to-purple-100",
          textColor: "text-purple-700"
        },
        {
          icon: <FaCode className="text-blue-500" />,
          text: "Enhanced data-layer performance with Redis and Hazelcast caching, reducing query latency by 60% and boosting system responsiveness.",
          metric: "60% faster queries",
          bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
          textColor: "text-blue-700"
        },
        {
          icon: <FaChartLine className="text-indigo-500" />,
          text: "Maintained 99.98% uptime by applying SRE principles and building Grafana + Prometheus dashboards for real-time observability.",
          metric: "99.98% uptime",
          bgColor: "bg-gradient-to-r from-indigo-50 to-indigo-100",
          textColor: "text-indigo-700"
        },
        {
          icon: <FaCode className="text-cyan-500" />,
          text: "Collaborated in Agile cross-functional teams, mentoring junior developers and driving code-review standards for clean architecture and test coverage > 90%.",
          metric: "90% test coverage",
          bgColor: "bg-gradient-to-r from-cyan-50 to-cyan-100",
          textColor: "text-cyan-700"
        }
      ]
    },
    {
      company: "HCL Tech",
      location: "India",
      role: "Software Engineer",
      summary: "Building secure, scalable banking solutions with Java microservices, event-driven architecture, and cloud deployment.",
      period: "June 2020 – July 2023",
      highlights: [
        {
          icon: <FaServer className="text-blue-500" />,
          text: "Engineered secure, modular RESTful and gRPC microservices with Java & Spring Boot, delivering reliable banking and payment solutions across multiple client projects.",
          metric: "Multi-client success",
          bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
          textColor: "text-blue-700"
        },
        {
          icon: <FaShieldAlt className="text-indigo-500" />,
          text: "Implemented authentication and authorization with Spring Security, OAuth 2.0 and JWT, ensuring PCI-DSS compliance and zero security breaches in production.",
          metric: "Zero breaches",
          bgColor: "bg-gradient-to-r from-indigo-50 to-indigo-100",
          textColor: "text-indigo-700"
        },
        {
          icon: <FaBolt className="text-cyan-500" />,
          text: "Developed event-driven pipelines using Apache Kafka and Redis for interbank message flows, reducing processing latency by 40%.",
          metric: "40% faster",
          bgColor: "bg-gradient-to-r from-cyan-50 to-cyan-100",
          textColor: "text-cyan-700"
        },
        {
          icon: <FaChartLine className="text-teal-500" />,
          text: "Designed responsive Angular and React dashboards for real-time transaction visibility and fraud monitoring.",
          metric: "Real-time monitoring",
          bgColor: "bg-gradient-to-r from-teal-50 to-teal-100",
          textColor: "text-teal-700"
        },
        {
          icon: <FaCloud className="text-purple-500" />,
          text: "Automated build and deployment with Jenkins and Docker, shortening deployment time by 35%.",
          metric: "35% faster deploys",
          bgColor: "bg-gradient-to-r from-purple-50 to-purple-100",
          textColor: "text-purple-700"
        },
        {
          icon: <FaTools className="text-blue-500" />,
          text: "Participated in Agile ceremonies and peer code reviews, contributing to sprint velocity growth by 20% and maintaining high code quality across microservice modules.",
          metric: "20% velocity gain",
          bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
          textColor: "text-blue-700"
        }
      ]
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaBriefcase className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <p className="text-xl text-gray-600">
            Building enterprise-grade solutions with modern technologies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-2 h-8 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900">{experience.company}</h3>
                    <span className="text-blue-600 font-semibold">{experience.location}</span>
                  </div>
                  <p className="text-xl text-gray-700">{experience.role}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-medium shadow-sm">
                    {experience.period}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 ml-5"
              >
                {experience.summary}
              </motion.p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {experience.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={hIndex}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-2">
                          {highlight.text}
                        </p>
                        <span className={`inline-block ${highlight.bgColor} ${highlight.textColor} text-sm px-3 py-1 rounded-full`}>
                          {highlight.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;