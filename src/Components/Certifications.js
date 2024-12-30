import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Certifications.css"; // Custom styles for certifications

const CertificationCard = ({ title, image }) => {
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="certification-card">
      <img
        src={image}
        alt={title}
        className="certification-image"
        onClick={openModal} // Open modal on click
        style={{ cursor: "pointer" }}
      />
      <h3 className="certification-title">{title}</h3>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={image}
              alt={title}
              className="modal-image"
            />
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CertificationCard;
