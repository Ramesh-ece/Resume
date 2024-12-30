import React from 'react';
import './AcademicQualifications.css';

const AcademicQualifications = () => {
  return (
    <div className="academic-container">
      <h2 className="section-title">ACADEMIC QUALIFICATIONS</h2>
      <table className="qualifications-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Discipline</th>
            <th>University/School</th>
            <th>Year of Passing</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ph.D</td>
            <td>Information & Communication Engineering</td>
            <td>Anna University, Chennai</td>
            <td>2019</td>
            <td>Commended</td>
          </tr>
          <tr>
            <td>M.E</td>
            <td>Applied Electronics</td>
            <td>Bharathiar University, Coimbatore</td>
            <td>1998</td>
            <td>First Class</td>
          </tr>
          <tr>
            <td>B.Tech</td>
            <td>Electrical & Electronics Engineering</td>
            <td>S.V. University, Tirupati</td>
            <td>1996</td>
            <td>First Class</td>
          </tr>
          <tr>
            <td>12th</td>
            <td>HSC</td>
            <td>Government Junior College, Cuddapah</td>
            <td>1992</td>
            <td>First Class</td>
          </tr>
          <tr>
            <td>10th</td>
            <td>SSLC</td>
            <td>Vidya Mandir School, Cuddapah</td>
            <td>1990</td>
            <td>First Class</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcademicQualifications;
