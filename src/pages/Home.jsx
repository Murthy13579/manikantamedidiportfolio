import React from "react";
import { FaLinkedin } from "react-icons/fa";
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

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 min-h-screen flex items-center justify-center text-center px-6 py-20">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Manikanta
          </span>{" "}
          — Full Stack Java Developer
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
        >
          I architect high-performance Java / Spring Boot 3 microservices with modern AI integrations and deliver responsive React and Angular interfaces for enterprise-scale platforms processing 1M+ transactions daily with 99.98% uptime, deployed on AWS and Azure through automated CI/CD pipelines.
        </motion.p>

        {/* Core competency cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-blue-600 font-bold text-lg mb-3">Backend Excellence</h3>
            <p className="text-gray-700">
              Engineered distributed systems in Java 17 / Spring Boot 3 with Kafka, achieving sub-second latency and scalable event streaming.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-blue-600 font-bold text-lg mb-3">Cloud & DevOps</h3>
            <p className="text-gray-700">
              Deployed resilient services on AWS & Azure using Terraform and CI/CD, reducing release cycles by 40%.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-blue-600 font-bold text-lg mb-3">Frontend Innovation</h3>
            <p className="text-gray-700">
              Delivered responsive, data-driven dashboards using React & Angular, enabling real-time enterprise visualization.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-blue-600 font-bold text-lg mb-3">Modern AI Integration</h3>
            <p className="text-gray-700">
              Enhanced Java applications with LLMs & LangChain4j integration to provide intelligent data processing and automated analytics capabilities.
            </p>
          </div>
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View My Work
            </Link>

            <a
              href="https://www.linkedin.com/in/satya-venkata-manikanta-m-5ab715379/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>

            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>

          <p className="text-sm text-gray-600 italic mt-4">
            Code for enterprise projects is confidential — detailed architecture overviews and measurable outcomes are showcased in the Projects section.
          </p>

          {/* ✅ AWS Certification (Home) */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white/80 backdrop-blur rounded-xl shadow-lg border border-gray-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-extrabold text-sm">AWS</span>
                </div>
                <div className="text-left">
                  <div className="text-base font-semibold text-gray-900">
                    AWS Certified Solutions Architect – Associate (SAA)
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Active • Issued: 2026-01-03 • Expires: 2029-01-03
                  </div>
                </div>
              </div>

              <a
                href="https://www.credly.com/badges/c575addf-9551-4332-95d5-58d655f09484"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Verify ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          <motion.div variants={counterVariants} className="text-center">
            <div className="text-3xl font-bold text-blue-600">99.98%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </motion.div>

          <motion.div variants={counterVariants} className="text-center">
            <div className="text-3xl font-bold text-blue-600">1M+</div>
            <div className="text-sm text-gray-600">Transactions / day</div>
          </motion.div>

          <motion.div variants={counterVariants} className="text-center">
            <div className="text-3xl font-bold text-blue-600">40%</div>
            <div className="text-sm text-gray-600">Faster Releases</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
