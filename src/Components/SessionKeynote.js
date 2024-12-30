import React from 'react';
import ICDCECE2024 from '../assets/Session_Chair/ICDCECE-2024.jpg';
import ICEI2022 from '../assets/Session_Chair/ICEI-2022.jpg';
import ICICACS2023 from '../assets/Session_Chair/ICICACS-2023.jpg';
import ICIIC2021 from '../assets/Session_Chair/ICIIC-2021.jpg';
import ICDCOT2021 from '../assets/Key_Note/ICDCOT-2021.jpg';
import NCETESFT2020 from '../assets/Key_Note/NCETESFT-2020.jpg';
import ICDCECE2022 from '../assets/Key_Note/ICDCECE-2022.jpg';
import ICDSIS2022 from '../assets/Key_Note/ICDSIS-2022.jpg';
import './SessionKeynote.css';

const SessionKeynote = () => {
  return (
    <div className="session-container">
      <h2 className="session-header">SESSION CHAIR</h2>
      <table className="session-table">
        <thead>
          <tr>
            <th>Conference</th>
            <th>Year</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3rd IEEE International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE-2024)</td>
            <td>2024</td>
            <td>
              <img className="session-image" src={ICDCECE2024} alt="ICDCECE-2024 Certificate" />
            </td>
          </tr>
          <tr>
            <td>International Conference On Engineering Innovation (ICEI 2022)</td>
            <td>2022</td>
            <td>
              <img className="session-image" src={ICEI2022} alt="ICEI-2022 Certificate" />
            </td>
          </tr>
          <tr>
            <td>IEEE International Conference on Integrated Circuits and Communication Systems (ICICACS-2023)</td>
            <td>2023</td>
            <td>
              <img className="session-image" src={ICICACS2023} alt="ICICACS-2023 Certificate" />
            </td>
          </tr>
          <tr>
            <td>3rd International Conference on Integrated Intelligent Computing, Communication & Security (ICIIC-2021)</td>
            <td>2021</td>
            <td>
              <img className="session-image" src={ICIIC2021} alt="ICIIC-2021 Certificate" />
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="session-header1">KEYNOTE SPEAKER</h2>
      <table className="session-table">
        <thead>
          <tr>
            <th>Conference</th>
            <th>Year</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>International Conference on Digital Communication and Optimization Techniques (ICDCOT-2021)</td>
            <td>2021</td>
            <td>
              <img className="session-image" src={ICDCOT2021} alt="ICDCOT-2021 Certificate" />
            </td>
          </tr>
          <tr>
            <td>National Conference on Emerging Trends in Engineering and Science (NCETESFT-2020)</td>
            <td>2020</td>
            <td>
              <img className="session-image" src={NCETESFT2020} alt="NCETESFT-2020 Certificate" />
            </td>
          </tr>
          <tr>
            <td>International Conference on Digital Communication and Embedded Control Systems (ICDCECE-2022)</td>
            <td>2022</td>
            <td>
              <img className="session-image" src={ICDCECE2022} alt="ICDCECE-2022 Certificate" />
            </td>
          </tr>
          <tr>
            <td>International Conference on Digital Signal and Image Processing (ICDSIS-2022)</td>
            <td>2022</td>
            <td>
              <img className="session-image" src={ICDSIS2022} alt="ICDSIS-2022 Certificate" />
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default SessionKeynote;
