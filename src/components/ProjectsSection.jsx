import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaRobot, FaHospital, FaProjectDiagram } from 'react-icons/fa';

const ProjectsSection = () => {
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

  const projects = [
    {
      icon: <FaBriefcase className="text-blue-600" />,
      title: "Real-Time TradeOps Platform",
      company: "@Charles Schwab",
      tagline: "AI-driven trading platform enabling 1M+ daily orders with 99.98% uptime and sub-second latency.",
      description: [
        "Built at Charles Schwab, this platform modernizes real-time trade execution and risk analytics for enterprise-scale clients.",
        "Designed distributed microservices using Java 17 and Spring Boot 3.x, integrated with Kafka Streams for high-throughput event processing and real-time data pipelines.",
        "Implemented GraphQL, REST, and gRPC APIs secured by OAuth 2.1 and Spring Security, ensuring secure cross-service communication.",
        "Deployed via AWS ECS and Azure AKS, achieving 99.98% availability and 40% faster release cycles through Terraform + CI/CD automation.",
        "Embedded Generative AI modules using LangChain4j and OpenAI APIs for behavioral analytics and predictive trade recommendations.",
        "Optimized data-layer performance with Redis + Hazelcast caching, cutting query latency by 38%.",
        "Compliant with Basel III standards and integrated FIX/SWIFT protocols for secure order routing."
      ],
      architecture: {
        title: "System Architecture Overview",
        components: [
          {
            name: "Event-Driven Core",
            details: "Kafka Streams-based architecture processing 1M+ daily trades"
          },
          {
            name: "AI Layer",
            details: "LangChain4j + OpenAI for real-time trade analytics"
          },
          {
            name: "Data Processing",
            details: "Redis + Hazelcast distributed caching"
          },
          {
            name: "API Gateway",
            details: "GraphQL, REST, gRPC endpoints with OAuth 2.1"
          }
        ],
        highlights: [
          "Multi-region deployment (AWS ECS + Azure AKS)",
          "Real-time event processing pipeline",
          "AI-powered decision support system",
          "Distributed caching layer"
        ]
      },
      outcome: "Enhanced trading efficiency, improved data visibility, and introduced AI-assisted decision support for real-time risk management.",
      tech: ["Spring Boot 3", "Java 17", "Kafka Streams", "GraphQL", "LangChain4j", "Redis", "Terraform", "AWS ECS", "Azure AKS", "PostgreSQL", "FIX/SWIFT APIs"],
      genAIFeatures: [
        {
          title: "Predictive Analytics with GenAI",
          description: "Integrated LangChain4j with OpenAI to provide real-time trade insights and risk assessment",
          impact: "25% improvement in decision accuracy"
        }
      ]
    },
    {
      icon: <FaHospital className="text-green-600" />,
      title: "Scalable Healthcare Data Exchange & Claims Automation Platform",
      company: "@HCL Tech",
      tagline: "FHIR-compliant claims automation platform achieving 40% faster processing and HIPAA compliance.",
      description: [
        "Developed at HCL Tech, this solution streamlines EHR data exchange and insurance claims automation for U.S. healthcare providers.",
        "Built modular Spring Boot and gRPC microservices to enable FHIR-based data interoperability via HAPI-FHIR server.",
        "Delivered a modern Angular 12 frontend with Material UI for real-time claim tracking and EHR management.",
        "Implemented secure authentication with Spring Security, OAuth 2.0, and JWT, ensuring full HIPAA and PHI compliance.",
        "Deployed on AWS ECS and Docker, integrating PostgreSQL + MongoDB for hybrid data storage.",
        "Introduced automated pipeline deployment with Jenkins + Kubernetes, reducing release time by 35%.",
        "Achieved 40% reduction in claims processing time through optimized data flows and batch parallelization."
      ],
      architecture: {
        title: "Healthcare Platform Architecture",
        components: [
          {
            name: "FHIR Integration Layer",
            details: "HAPI-FHIR server for healthcare data interoperability"
          },
          {
            name: "Claims Processing Engine",
            details: "Parallel processing pipelines for claims automation"
          },
          {
            name: "Hybrid Storage",
            details: "PostgreSQL + MongoDB for flexible data management"
          },
          {
            name: "Security Layer",
            details: "OAuth 2.0 + JWT for HIPAA compliance"
          }
        ],
        highlights: [
          "FHIR-compliant data exchange",
          "Containerized microservices",
          "Hybrid database architecture",
          "CI/CD automation pipeline"
        ]
      },
      outcome: "Improved healthcare data interoperability, accelerated claim approvals, and ensured end-to-end HIPAA-grade security.",
      tech: ["Spring Boot", "gRPC", "Angular 12", "HAPI-FHIR", "OAuth 2.0", "PostgreSQL", "MongoDB", "AWS ECS", "Docker", "Kubernetes"]
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaLaptopCode className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <p className="text-xl text-gray-600">
            Enterprise-scale solutions with modern architecture
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    <p className="text-blue-600 font-medium">{project.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-lg text-gray-600 font-medium border-l-4 border-blue-500 pl-4">
                  {project.tagline}
                </p>
              </div>

              <div className="p-8 space-y-8">
                {/* Project Description */}
                <div className="space-y-4">
                  {project.description.map((point, idx) => (
                    <p key={idx} className="text-gray-600">
                      {point}
                    </p>
                  ))}
                </div>

                {/* Architecture Section */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FaProjectDiagram className="text-2xl text-blue-600" />
                    <h4 className="text-xl font-semibold text-blue-900">
                      {project.architecture.title}
                    </h4>
                  </div>
                  
                  {/* Architecture Components */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {project.architecture.components.map((component, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <h5 className="font-semibold text-gray-900 mb-2">{component.name}</h5>
                        <p className="text-gray-600 text-sm">{component.details}</p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GenAI Features if present */}
                {project.genAIFeatures && (
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaRobot className="text-2xl text-purple-600" />
                      <h4 className="text-lg font-semibold text-purple-900">
                        {project.genAIFeatures[0].title}
                      </h4>
                    </div>
                    <p className="text-purple-700 mb-2">
                      {project.genAIFeatures[0].description}
                    </p>
                    <div className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.genAIFeatures[0].impact}
                    </div>
                  </div>
                )}

                {/* Project Outcome */}
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-900 font-medium">
                    Result: {project.outcome}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;