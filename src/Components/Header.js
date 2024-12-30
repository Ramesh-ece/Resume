import React from "react";
import "./Header.css";
import GPRImage from "./GPR.png";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="top-header">
      <div className="profile-content">
        <div className="text-content">
          <h1>Prof Dr.G.P.Ramesh</h1>
          <p>
            Academician | Ambitious Researcher | Expert in implementing Outcome
            Based Education (OBE) system | Curriculum Design and Development |
            Public Speaker
          </p>
        </div>
        <div className="profile-photo">
          <img
            src={GPRImage}
            alt="Dr. G.P. Ramesh"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
    </div>
  );
};

export default Header;
