import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaFlask,
  FaTrophy,
  FaClipboard,
  FaCogs,
  FaHandshake,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaMicrophoneAlt,
  FaUserEdit,
  FaHandsHelping
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for toggling submenu
  const [isProfessionalDropdownOpen, setProfessionalDropdownOpen] = useState(false); // State for Professional Activity dropdown

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const toggleProfessionalDropdown = () => {
    setProfessionalDropdownOpen(!isProfessionalDropdownOpen); // Toggle professional activity dropdown visibility
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={handleLinkClick}>
            <FaUser />
            <span>About Me</span>
          </Link>
        </li>
        <li className={location.pathname === "/education" ? "active" : ""}>
          <Link to="/education" onClick={handleLinkClick}>
            <FaGraduationCap />
            <span>Education</span>
          </Link>
        </li>
        <li className={location.pathname === "/experience" ? "active" : ""}>
          <Link to="/experience" onClick={handleLinkClick}>
            <FaBriefcase />
            <span>Experience</span>
          </Link>
        </li>
        <li className={location.pathname === "/research" ? "active" : ""}>
          <Link to="/research" onClick={handleLinkClick}>
            <FaFlask />
            <span>Research</span>
          </Link>
        </li>
        <li>
          <div className={`dropdown-header ${isDropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
            <FaTrophy className="recognition-icon" />
            <span>Recognition</span>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isDropdownOpen && (
            <ul className={`submenu ${isDropdownOpen ? "open" : ""}`}>
              <li className={location.pathname === "/awards" ? "active" : ""}>
                <Link to="/awards" onClick={handleLinkClick}>
                  <FaTrophy />
                  <span>Awards</span>
                </Link>
              </li>
              <li className={location.pathname === "/patents" ? "active" : ""}>
                <Link to="/patents" onClick={handleLinkClick}>
                  <FaClipboard />
                  <span>Patents</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
               
          <li>
          <div className={`dropdown-header ${isProfessionalDropdownOpen ? "open" : ""}`} onClick={toggleProfessionalDropdown}>
            <FaPaperPlane className="recognition-icon" />
            <span>Professional Activity</span>
            {isProfessionalDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isProfessionalDropdownOpen && (
            <ul className={`submenu ${isProfessionalDropdownOpen ? "open" : ""}`}>
              <li className={location.pathname === "/Participation" ? "active" : ""}>
                <Link to="/Participation" onClick={handleLinkClick}>
                  <FaHandsHelping />
                  <span>Participation and Events Organized</span>
                </Link>
              </li>
              <li className={location.pathname === "/Reviewer" ? "active" : ""}>
                <Link to="/Reviewer" onClick={handleLinkClick}>
                  <FaUserEdit />
                  <span>Reviewer</span>
                </Link>
              </li>
              <li className={location.pathname === "/SessionKeynote" ? "active" : ""}>
                <Link to="/SessionKeynote" onClick={handleLinkClick}>
                  <FaMicrophoneAlt />
                  <span>Session Chair and Keynote Speaker</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects" onClick={handleLinkClick}>
            <FaHandshake />
            <span>Projects and Consultations</span>
          </Link>
        </li>
        <li className={location.pathname === "/publications" ? "active" : ""}>
          <Link to="/publications" onClick={handleLinkClick}>
            <FaClipboard />
            <span>Publications</span>
          </Link>
        </li>
        <li className={location.pathname === "/nptelandfdp" ? "active" : ""}>
          <Link to="/nptelandfdp" onClick={handleLinkClick}>
            <FaCertificate />
            <span>NPTEL Certifications and FDP</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
