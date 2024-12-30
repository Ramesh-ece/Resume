import React from 'react';
import { Link } from 'react-router-dom'; 
import './ResearchContributions.css'; // Import custom CSS

// Importing images
import ResearcherID from '../assets/ResearcherID.png';
import Vidwan from '../assets/Vidwan.png';
import ORCID from '../assets/ORCID.png';
import ScopusAuthorID from '../assets/ScopusAuthorID.png';
import GoogleScholar from '../assets/GoogleScholar.png';
import PublonsID from '../assets/PublonsID.png';
import LinkedIn from '../assets/LinkedIn.png';

const ResearchContributions = () => {
  return (
    <div className="research-contributions-container">
      <h2 className="section-title">RESEARCH,ACADEMIC AND ADMINISTRATIVE CONTRIBUTIONS</h2>

      {/* Research Contributions Table */}
      <div className="table-container">
        <h4>Research Contributions</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Research Quality [SCOPUS]</strong></td>
              <td>h-index: 23, i10-index: 56, Citations: 1053</td>
            </tr>
            <tr>
              <td><strong>Research Papers Published in Conference Proceedings</strong></td>
              <td>52 papers published</td>
            </tr>
            <tr>
              <td><strong>Research Guidance</strong></td>
              <td>No of Students Awarded for Ph.D: 05, No of Students Pursuing Ph.D: 08</td>
            </tr>
            <tr>
              <td><strong>Patents Published</strong></td>
              <td>
                05 patents published
                <Link 
                  to="/patents" 
                  className="link-box" 
                  style={{ marginLeft: '10px', textDecoration: 'underline', color: '#0056b3' }}
                >
                  View Details 🔗
                </Link>
              </td>
            </tr>
            <tr>
              <td><strong>Research Projects (MSME)</strong></td>
              <td>02 projects</td>
            </tr>
            <tr>
              <td><strong>Consultancy Projects Completed</strong></td>
              <td>
                03 projects 
                <Link 
                  to="/projects" 
                  className="link-box" 
                  style={{ marginLeft: '10px', textDecoration: 'underline', color: '#0056b3' }}
                >
                  View Details 🔗
                </Link>
              </td>
            </tr>
            <tr>
              <td><strong>Membership of Professional Bodies</strong></td>
              <td>02 memberships
              <Link 
                  to="/memberships" 
                  className="link-box" 
                  style={{ marginLeft: '10px', textDecoration: 'underline', color: '#0056b3' }}
                >
                  View Details 🔗
              </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Researcher Profile Links Table */}
      <div className="table-container mt-5">
        <h4>Researcher Profile Links</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={ResearcherID} className="profile-icon" /> <strong>Researcher ID</strong></td>
              <td>
                AAM-5596-2020 
                <a
                  href="https://researchid.co/rameshgp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={Vidwan} className="profile-icon" /> <strong>Vidwan-ID</strong></td>
              <td>
                <a
                  href="https://vidwan.inflibnet.ac.in/profile/286818#experience_information_panel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on Vidwan🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={ORCID} className="profile-icon" /> <strong>ORCID ID</strong></td>
              <td>
                <a
                  href="https://orcid.org/0000-0002-6470-4029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on ORCID 🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={ScopusAuthorID} className="profile-icon" /> <strong>Scopus Author ID</strong></td>
              <td>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57201617809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on SCOPUS🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={GoogleScholar} className="profile-icon" /> <strong>Google Scholar</strong></td>
              <td>
                <a
                  href="https://scholar.google.co.in/citations?user=aWWJczwAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on Google Scholar🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={PublonsID} className="profile-icon" /> <strong>Publons ID</strong></td>
              <td>
                <a
                  href="https://publons.com/wos-op/researcher/2541299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on Publons 🔗
                </a>
              </td>
            </tr>
            <tr>
              <td><img src={LinkedIn} className="profile-icon" /> <strong>LinkedIn</strong></td>
              <td>
                <a
                  href="https://www.linkedin.com/in/dr-gp-ramesh-88b7256b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-box"
                >
                  Dr. G.P. Ramesh on LinkedIn 🔗
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchContributions;
