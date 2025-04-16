import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-50 to-purple-100 py-16 px-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up">
          I’d love to connect with you! Reach out through any of the options below.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          <a
            href="tel:+19409774042"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-green-600 transition-all duration-300"
          >
            <FaPhoneAlt /> Call Me
          </a>
          <a
            href="mailto:medidimanikanta6@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-blue-600 transition-all duration-300"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/manikanta-medidi-17896a21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-sky-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-sky-700 transition-all duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
