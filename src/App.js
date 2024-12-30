import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header"; // Import the Header component
import AboutMe from "./Components/AboutMe";
import AcademicQualifications from "./Components/AcademicQualifications";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import ResearchContributions from "./Components/ResearchContributions";
import AchievementsAwards from "./Components/AchievementsAwards";
import Patents from "./Components/Patents";
import Memberships from "./Components/Memberships";
import ProjectsConsultations from "./Components/ProjectsConsultations";
import Publications from "./Components/Publications";
import NptelAndFdp from "./Components/NptelAndFdp";
import Participation from "./Components/Participation";
import Reviewer from "./Components/Reviewer";
import SessionKeynote from "./Components/SessionKeynote";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar open/close

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); // Toggle function for opening/closing sidebar

  return (
    <Router>
      <div className="app-container">
        {/* Fixed Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Layout */}
        <div className="main-layout">
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} /> {/* Pass state and setState to Sidebar */}

          {/* Content Area */}
          <div className="content-area">
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/education" element={<AcademicQualifications />} />
              <Route path="/experience" element={<ProfessionalExperience />} />
              <Route path="/research" element={<ResearchContributions />} />
              <Route path="/awards" element={<AchievementsAwards />} />
              <Route path="/patents" element={<Patents />} />
              <Route path= "/Participation" element={<Participation />} />
              <Route path= "/Reviewer" element={<Reviewer />} />
              <Route path= "/SessionKeynote" element={<SessionKeynote />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/projects" element={<ProjectsConsultations />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/nptelandfdp" element={<NptelAndFdp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
