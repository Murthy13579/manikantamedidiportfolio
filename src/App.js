import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
