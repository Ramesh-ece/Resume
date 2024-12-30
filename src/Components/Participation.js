import React from 'react';
import './Participation.css';

const ProgramsAttended = () => {
  return (
    <div className="programs-container">
      <h2>EVENTS ATTENTEND</h2>
      <table className="programs-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Participated As Resource Person/Moderator</td>
            <td>28 events </td>
          </tr>  
          <tr>
            <td>Short Term Courses/Conferences/Seminars/Workshops Participated</td>
            <td>26 events </td>
          </tr>
          <tr>
            <td>National level Workshop on G20 University Connect Seminar</td>
            <td>The G20 New Delhi Leadership Declaration and the Emerging World Order organized by Anna University on 15-NOV-23.</td>
          </tr>
          <tr>
            <td>Faculty Development Program/Sensitization Program Attended</td>
            <td>64 programs </td>
          </tr> 
          <tr>
            <td>National level Workshop on 5 Day online FDP</td>
            <td>Inculcating Universal Human Values in Technical Education organized by AICTE from 21-AUG-23 to 25-AUG-23.</td>
          </tr>
          <tr>
            <td>National level Seminar on Six Days Faculty Induction Training Programme</td>
            <td>Organized by Anna University on 31-JUL-23.</td>
          </tr>
          <tr>
            <td>National level Seminar on Fibrous silica catalysts for green technologies</td>
            <td>Organized by SSN College of Engineering on 09-SEP-20.</td>
          </tr>
          <tr>
            <td>National level Workshop on Smart Sensors and IOT</td>
            <td>5-day Webinar series organized by RVCE Bangalore from 24-AUG-20 to 28-AUG-20.</td>
          </tr>
          <tr>
            <td>National level Workshop on Antenna design and measurement techniques</td>
            <td>Organized by SSN College of Engineering from 10-DEC-18 to 15-DEC-18.</td>
          </tr>
          <tr>
            <td>International level Seminar on India-Russia consultation</td>
            <td>Water resources research, development and management for human welfare and environmental protection organized by Karunya University from 27-NOV-18 to 28-NOV-18.</td>
          </tr>
          <tr>
            <td>National level Seminar on QIP on Industrial Applications of Terahertz Radiation</td>
            <td>Organized by IIT Kharagpur from 27-MAR-17 to 04-APR-17.</td>
          </tr>
          <tr>
            <td>National level Workshop on Thin Film Solar Cells</td>
            <td>Hands-on training program organized by Department of Nano-Technology - Anna University from 11-NOV-16 to 12-NOV-16.</td>
          </tr>
          <tr>
            <td>National level Seminar on Indian Digital Heritage</td>
            <td>Marine exploration – A case Study organized by AMET University from 25-AUG-16 to 26-AUG-16.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ProgramsOrganized = () => {
  return (
    <div className="pro-container">
      <h2>EVENTS ORGANIZED</h2>
      <table className="programs-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Organizer/Convenor</td>
            <td>Conferences/Seminars/Workshops Organized</td>
            <td>23 events</td>
          </tr>  
          <tr>
            <td>Convenor/Organizer</td>
            <td>National level Seminar on Disposable sensors for next generation diagnostics</td>
            <td>24-JUL-24</td>
          </tr>
          <tr>
            <td>Organizer/Convenor</td>
            <td>National level Seminar on Breast Cancer Therapeutics Using Additive Manufacturing and Data Analytics</td>
            <td>23-APR-24</td>
          </tr>
          <tr>
            <td>Convenor</td>
            <td>International level Workshop on Indo Japan Workshop</td>
            <td>09-MAR-23</td>
          </tr>
          <tr>
            <td>Co-convenor</td>
            <td>National level Workshop on MCGPD 2023</td>
            <td>06-MAR-23 to 08-MAR-23</td>
          </tr>
          <tr>
            <td>Convenor</td>
            <td>National level Workshop on SMTBEA 2022</td>
            <td>19-MAY-22 to 21-MAY-22</td>
          </tr>
          <tr>
            <td>Organiser</td>
            <td>National level Workshop on Advanced materials and Modern Applications (AMMA 2020)</td>
            <td>01-JUN-20 to 02-JUN-20</td>
          </tr>
          <tr>
            <td>Organiser</td>
            <td>National level Workshop on Smart Materials Sensors and Devices (SMSED -2020)</td>
            <td>25-MAY-20 to 30-MAY-20</td>
          </tr>
          <tr>
            <td>Organiser</td>
            <td>National level Workshop on Indian Summer school on crystal growth (Co-Convenor)</td>
            <td>14-MAY-20 to 23-MAY-20</td>
          </tr>
          <tr>
            <td>Organizing Committee</td>
            <td>International level Workshop on International Symposium on Modeling of Crystal Growth Processes and Devices</td>
            <td>26-FEB-19 to 01-MAR-19</td>
          </tr>
          <tr>
            <td>Organiser</td>
            <td>National level Workshop on Smart Materials Sensors and Energy Devices</td>
            <td>06-DEC-18 to 08-DEC-18</td>
          </tr>
          <tr>
            <td>Organizer</td>
            <td>National level Workshop on Hands on training on MEMS design tools</td>
            <td>09-FEB-17 to 10-FEB-17</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Participation = () => {
  return (
    <div>
      <ProgramsOrganized />
      <ProgramsAttended />
    </div>
  );
};

export default Participation;
