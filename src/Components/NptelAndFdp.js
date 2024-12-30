import React from "react";
import "./NptelAndFdp.css"; // Custom styles for the page
import CertificationCard from "../Components/Certifications"; // Component to display individual certification cards
import Nptel1 from "../assets/Nptel-doc/NPTEL-StressManagement.jpg";
import Nptel2 from "../assets/Nptel-doc/NPTEL-EducationforSustainableDevelopment.jpg";
import Nptel3 from "../assets/Nptel-doc/NPTEL-EducationalLeadership.jpg";
import Nptel4 from "../assets/Nptel-doc/NPTEL-DataScienceforEngineers.jpg";
import Fdp1 from "../assets/FDP-doc/FDP-StressManagement.jpg";
import Fdp2 from "../assets/FDP-doc/FDP-EducationforSustainableDevelopment.jpg";
import Fdp3 from "../assets/FDP-doc/FDP-EducationalLeadership.jpg";
import Fdp4 from "../assets/FDP-doc/FDP-DataScienceforEngineers.jpeg";

const NptelAndFdp = () => {
  // Certification data
  const nptelCertifications = [
    { title: "Stress Management (Aug-Sep 2024)", image: Nptel1 },
    {
      title: "Education for Sustainable Development (Jan-Apr 2024)",
      image: Nptel2,
    },
    { title: "Educational Leadership (Jul-Oct 2023)", image: Nptel3 },
    { title: "Data Science for Engineers (Jul-Sep 2022)", image: Nptel4 },
  ];

  const fdpCertifications = [
    { title: "Stress Management", image: Fdp1 },
    { title: "Education for Sustainable Development", image: Fdp2 },
    { title: "Educational Leadership", image: Fdp3 },
    { title: "Data Science for Engineers", image: Fdp4 },
  ];

  return (
    <div className="nptel-fdp-container">
      <h2 className="section-title">NPTEL Certifications</h2>
      <div className="certifications-grid">
        {nptelCertifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            image={cert.image}
          />
        ))}
      </div>

      <h2 className="section-title">FDP Certifications</h2>
      <div className="certifications-grid">
        {fdpCertifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NptelAndFdp;
