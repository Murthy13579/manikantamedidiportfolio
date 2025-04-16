import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">My Portfolio</div>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><Link to="/home" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link to="/experience" className="hover:text-blue-500 transition">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-blue-500 transition">Projects</Link></li>
            <li><Link to="/education" className="hover:text-blue-500 transition">Education</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
