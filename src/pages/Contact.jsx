import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedinIn, FaPhone } from 'react-icons/fa';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      label: "Email",
      value: "manikantamedidi657@gmail.com",
      link: "mailto:manikantamedidi657@gmail.com",
      color: "blue"
    },
    {
      icon: <FaLinkedinIn className="text-2xl text-blue-600" />,
      label: "LinkedIn",
      value: "Satya Venkata Manikanta M",
      link: "https://www.linkedin.com/in/satya-venkata-manikanta-m-5ab715379/",
      color: "blue"
    },
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      label: "Phone",
      value: "(940) 977-4042",
      link: "tel:+19409774042",
      color: "blue"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaEnvelope className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
          </div>
          <p className="text-xl text-gray-600">
            Let's Connect
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-50 p-4 rounded-full">
                  {contact.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{contact.label}</h3>
                  <p className="text-blue-600 font-medium break-all">
                    {contact.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 text-gray-600"
        >
          <p>Looking forward to connecting with you!</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;