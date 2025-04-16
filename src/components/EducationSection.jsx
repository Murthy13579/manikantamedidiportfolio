import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Education
        </h1>

        <div className="bg-gray-100 rounded-xl p-6 mb-6 shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Master of Science in Computer Science
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>University of North Texas, Denton, TX</strong> | Expected May 2025
          </p>
          <p className="text-gray-600">CGPA: 3.6</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Bachelor of Science in Aeronautical Engineering
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Hindusthan Institute of Technology, Coimbatore, India</strong> | May 2022
          </p>
          <p className="text-gray-600">CGPA: 9.16 / 10</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
