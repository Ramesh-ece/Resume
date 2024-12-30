import React from 'react';
import './AboutMe.css'; // Ensure the correct path for your CSS file
import GPRImage from './GPR.png'; // Ensure the image path is correct
import Memberships from './Memberships'; // Import the Memberships component

const AboutMe = () => {
  return (
    <div className="container mt-5 about-me-container">
      <div className="row">
        {/* Profile Photo Section */}
        <div className="col-md-4 position-relative">
          <div className="pro-photo">
            <img src={GPRImage} alt="Dr. G.P. Ramesh" className="img-fluid rounded-circle" />
          </div>
          {/* Contact Box Below Profile Picture */}
          <div className="contact-box mt-3">
            <h4>Contact Information</h4>
            <p><strong>Email:</strong> rameshgp@yahoo.com</p>
            <p><strong>Phone:</strong> 9962115550</p>
            <p><strong>Address:</strong> D22/1, Southern Shelters, Kattupakkum, Chennai-56</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gpramesh/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gpramesh</a></p>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-8">
          <h2 className="about-title">About Me</h2>
          <p className="intro-text">
            I am Dr. G.P. Ramesh, a seasoned educator and researcher with 26 years of experience in Teaching and Research. I have a consistent record of academic excellence and have published over 90 research papers in Scopus-indexed and Web of Science journals. My work includes 6 patents, industry projects, and extensive administrative responsibilities. 
          </p>

          <div className="summary-box">
            <h4 className="summary-title">Summary</h4>
            <ul className="summary-list">
              <li>26 years of experience in Teaching & Research with multitasking activities beyond academics.</li>
              <li>Consistent and outstanding academic records throughout my education.</li>
              <li>Published 5 patents and applied for grants.</li>
              <li>Published over 90 research papers with an h-index: 23, i10-index: 56, Citations: 1053.</li>
              <li>5 Ph.D. students supervised and awarded under my guidance at St. Peter’s Institute of Higher Education and Research.</li>
              <li>Completed 4 industry projects as consultancy with a total funding of Rs 15 lakhs.</li>
              <li>Delivered keynote addresses and chaired sessions in 11 International and National Conferences.</li>
              <li>Editorial Member in three SCI and Scopus journals.</li>
              <li>Developed two products under MSME Research Scheme.</li>
              <li>Experience in applying for AICTE grants like MODROBS, STP grants, FDP, seminars, etc.</li>
              <li>Familiar with the administrative environment at educational institutes and their practices.</li>
              <li>Business Incubatee for MSME, Vice President for Institute Innovation Council, and Convenor for Atal Ranking of Institutions on Innovation Achievements.</li>
              <li>Organized seven International and three National conferences.</li>
              <li>Familiar with NAAC, NBA, UGC, 12B status, and ISO accreditation process. Academic Auditor for NAAC accreditation.</li>
              <li>Branch Counselor for IEEE chapter and IE(I) in SPIHER, and active committee member in IE(I) Thiruvallur Local Center.</li>
              <li>Worked as Admission Coordinator and Chief Superintendent of online exams in SPIHER.</li>
            </ul>
          </div>

          {/* Memberships Section */}
          <div className="summary-box">
          <h4 className="summary-title">Memberships</h4>
            <Memberships />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
