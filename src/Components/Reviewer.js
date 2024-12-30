import React from 'react';
import ReviewerCertificate from '../assets/Reviewer-Certificate.jpg';
import ReviewerNcon2022 from '../assets/Reviewer-IEEE-Ncon-2022.jpg';
import './Reviewer.css';

const Reviewer = () => {
  return (
    <div className="reviewer-container">
      <h2 className="reviewer-heading">REVIEWER</h2>
      <p className="reviewer-description">Reviewed 40 papers for MDPI journals during the period 2023-2024.</p>
      <img src={ReviewerCertificate} alt="Reviewer Certificate" className="reviewer-image" />
      <p className="reviewer-description">Reviewer for IEEE NKCon-2022 Flagship International Conference.</p>
      <img src={ReviewerNcon2022} alt="IEEE Ncon 2022 Reviewer Certificate" className="reviewer-image" />
    </div>
  );
};

export default Reviewer;
