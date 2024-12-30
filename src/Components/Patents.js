import React, { useState } from 'react';
import './Patents.css';

// Importing patent images
import image201641024238 from '../assets/Patentsdoc/201641024238.jpg';
import image201841026631 from '../assets/Patentsdoc/201841026631.jpg';
import image201841026640 from '../assets/Patentsdoc/201841026640.jpg';
import image202041033291 from '../assets/Patentsdoc/202041033291.jpg';
import image202041033296 from '../assets/Patentsdoc/202041033296.jpg';
import image441349001 from '../assets/Patentsdoc/441349-001.jpg';

// Importing supporting documents
import pdf201641024238 from '../assets/Patentsupportingdoc/201641024238.pdf';
import pdf201841026631 from '../assets/Patentsupportingdoc/201841026631.pdf';
import pdf201841026640 from '../assets/Patentsupportingdoc/201841026640.pdf';
import pdf202041033291 from '../assets/Patentsupportingdoc/202041033291.pdf';
import pdf202041033296 from '../assets/Patentsupportingdoc/202041033296.pdf';
import pdf441349001 from '../assets/Patentsupportingdoc/441349-001.pdf';

const Patents = () => {
  const [modalImage, setModalImage] = useState(null);

  const patentData = [
    {
      sno: 1,
      title: "Novel emergency notification system for elderly protection using MEMs sensor: S-Waistband",
      regNumber: "201641024238",
      status: "Published",
      year: "2017-2018",
      image: image201641024238,
      pdf: pdf201641024238,
    },
    {
      sno: 2,
      title: "RZF antenna for ECG monitoring using IoT.",
      regNumber: "201841026631",
      status: "Published",
      year: "2018-2019",
      image: image201841026631,
      pdf: pdf201841026631,
    },
    {
      sno: 3,
      title: "Multiband reconfigurable antenna in Wi-max frequency for soil quality sensing applications",
      regNumber: "201841026640",
      status: "Published",
      year: "2018-2019",
      image: image201841026640,
      pdf: pdf201841026640,
    },
    {
      sno: 4,
      title: "Mosquito larve level growth identification using optical sensor on the sewage passage to prevent dengue",
      regNumber: "202041033291",
      status: "Published",
      year: "2020-2021",
      image: image202041033291,
      pdf: pdf202041033291,
    },
    {
      sno: 5,
      title: "Design and development of a wearable in EAR EEG device to diagnose Schizophrenia",
      regNumber: "202041033296",
      status: "Published",
      year: "2020-2021",
      image: image202041033296,
      pdf: pdf202041033296,
    },
    {
      sno: 6,
      title: "Ai Drone Design",
      regNumber: "441349-001",
      status: "Filed",
      year: "2024",
      image: image441349001,
      pdf: pdf441349001
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="patent-section">
      <h2 className="patent-title">PATENTS</h2>
      <table className="patent-table">
        <thead className="table-header">
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Reg. Number</th>
            <th>Status</th>
            <th>Year</th>
            <th>Patent Image</th>
            <th>Supporting Document</th>
          </tr>
        </thead>
        <tbody>
          {patentData.map((patent, index) => (
            <tr key={index} className="table-row">
              <td>{patent.sno}</td>
              <td>{patent.title}</td>
              <td>{patent.regNumber}</td>
              <td>{patent.status}</td>
              <td>{patent.year}</td>
              <td>
                <img
                  src={patent.image}
                  alt={`Patent ${patent.regNumber}`}
                  className="patent-thumbnail"
                  onClick={() => openModal(patent.image)}
                />
              </td>
              <td>
                <a
                  href={patent.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalImage && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-container">
            <img src={modalImage} alt="Enlarged Patent" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patents;
