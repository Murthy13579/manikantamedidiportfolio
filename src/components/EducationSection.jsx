import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
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
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const education = [
    {
      degree: "Master of Computer Science",
      university: "University of North Texas",
      location: "Denton, TX, USA",
      gpa: "CGPA: 3.6",
      color: "blue"
    },
    {
      degree: "Bachelor of Engineering",
      university: "Hindustan Institute of Technology",
      location: "Coimbatore, India",
      gpa: "CGPA: 9.16/10",
      color: "blue"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="education"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGraduationCap className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
          </div>
          <p className="text-xl text-gray-600">
            Academic Background
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-2 h-full rounded-full mr-6"></div>
                <div className="space-y-2 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.university}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {edu.gpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;