import React from 'react';
import './ProjectsConsultations.css';

const ProjectsConsultations = () => {
  return (
    <div className="projects-consultations-container">
      <h2>PROJECTS AND CONSULTATIONS</h2>
      <table className="projects-consultations-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Project</th>
            <th>Revenue (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chipthing Lab, Chennai</td>
            <td>Braille-based communication and translation glove</td>
            <td>221,000</td>
          </tr>
          <tr>
            <td>Vee Technologies Solution Pvt Ltd, Chennai</td>
            <td>Healthcare monitoring system using IoT and RFID</td>
            <td>115,500</td>
          </tr>
          <tr>
            <td>Signals and Solutions, Chennai</td>
            <td>Non-invasive system to estimate FBGL from salivary electrochemical parameters</td>
            <td>231,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsConsultations;
