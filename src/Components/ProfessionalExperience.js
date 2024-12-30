import React, { useEffect, useState } from 'react';
import './ProfessionalExperience.css'; // Custom CSS for styling

const calculateTimeline = (startDateString, endDateString = null) => {
  const monthsMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const [startMonth, startYear] = startDateString.split(" ");
  const startDate = new Date(Number(startYear), monthsMap[startMonth]);

  let endDate;
  if (endDateString === null || endDateString.toLowerCase() === "present") {
    endDate = new Date();
  } else {
    const [endMonth, endYear] = endDateString.split(" ");
    endDate = new Date(Number(endYear), monthsMap[endMonth]);
  }

  if (isNaN(startDate) || isNaN(endDate)) {
    return "Invalid date";
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
};

const ProfessionalExperience = () => {
  const [totalExperience, setTotalExperience] = useState({ years: 0, months: 0 });

  const experiences = [
    {
      institution: 'St. Peters Institute of Higher Education and Research, Chennai',
      position: 'Professor & Head ECE',
      duration: 'Dec 2012 - Present',
      startDate: 'Dec 2012',
      endDate: null, // null indicates present
    },
    {
      institution: 'SRM University, Ramapuram, Chennai',
      position: 'Associate Professor & Head EEE',
      duration: 'Jun 2010 - Nov 2012',
      startDate: 'Jun 2010',
      endDate: 'Nov 2012',
    },
    {
      institution: 'Loyola Institute of Technology, Chennai',
      position: 'Assistant Professor & Head EEE',
      duration: 'May 2007 - Apr 2010',
      startDate: 'May 2007',
      endDate: 'Apr 2010',
    },
    {
      institution: 'INTI College, Sarawak, Malaysia',
      position: 'Assistant Professor',
      duration: 'Sep 2003 - Apr 2007',
      startDate: 'Sep 2003',
      endDate: 'Apr 2007',
    },
    {
      institution: 'Sree Sastha Institute of Engineering and Technology',
      position: 'Assistant Professor',
      duration: 'Jun 2002 - Sep 2003',
      startDate: 'Jun 2002',
      endDate: 'Sep 2003',
    },
    {
      institution: 'St. Peters Engineering College, Chennai',
      position: 'Assistant Professor',
      duration: 'Nov 1998 - May 2002',
      startDate: 'Nov 1998',
      endDate: 'May 2002',
    },
  ];

  useEffect(() => {
    // Calculate total experience based on all job entries
    let totalYears = 0;
    let totalMonths = 0;

    experiences.forEach((exp) => {
      const { years, months } = calculateTimeline(exp.startDate, exp.endDate);
      totalYears += years;
      totalMonths += months;
    });

    // Adjust total months into years
    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;

    setTotalExperience({ years: totalYears, months: totalMonths });
  }, [experiences]);

  return (
    <div className="experience-container ">
      <h2 >PROFESSIONAL EXPERIENCE</h2>

      {/* Display total experience */}
      <div className="total-experience">
        <h3>Total Experience: {totalExperience.years} years {totalExperience.months} months</h3>
      </div>

      {/* Professional Experience Table */}
      <table className="experience-table">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Position</th>
            <th>Duration</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((exp, index) => (
            <tr key={index}>
              <td>{exp.institution}</td>
              <td>{exp.position}</td>
              <td>{exp.duration}</td>
              <td>{calculateTimeline(exp.startDate, exp.endDate).years} years {calculateTimeline(exp.startDate, exp.endDate).months} months</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Administrative Experience Section */}
      <h3 className="admin-experience-title">ADMINISTRATIVE EXPERIENCE – INSTITUTIONAL LEVEL</h3>
      <div className="admin-experience">
        <h4>Convenor and Vice President of Institution's Innovation Council</h4>
        <ul>
          <li><span className="tick">&#10004;</span> Worked in close coordination with IIC president and provided help wherever required for smooth conduction of activities.</li>
          <li><span className="tick">&#10004;</span> Collected inputs from all council members, especially external members, for better planning and delivery of IIC activities.</li>
          <li><span className="tick">&#10004;</span> Delivered presentations on Design Thinking and Product Development Life Cycles.</li>
          <li><span className="tick">&#10004;</span> Received SPIHER Ratings: Five stars (2018-2019), Two stars (2019-2020), Three stars (2020-2021), Four stars (2021-2022).</li>
          <li><span className="tick">&#10004;</span> Contributed significantly to student admissions.</li>
          <li><span className="tick">&#10004;</span> Organized seminars to inculcate awareness of engineering disciplines to higher secondary school students.</li>
        </ul>

        <h4>Research and Development Coordinator</h4>
        <ul>
          <li><span className="tick">&#10004;</span> Organized faculty and staff development programs for qualification upgrades.</li>
          <li><span className="tick">&#10004;</span> Arranged faculty & staff development with respect to training needs.</li>
          <li><span className="tick">&#10004;</span> Motivated faculty to write projects and facilitated consultancy work in the institution.</li>
          <li><span className="tick">&#10004;</span> Monitored the effective utilization of funds for externally funded projects.</li>
          <li><span className="tick">&#10004;</span> Maintained and updated records of research publications.</li>
        </ul>

        <h4>AICTE – CII Survey of Industry-Linked Technical Institutes</h4>
        <ul>
          <li><span className="tick">&#10004;</span> Administered Industry Institute Linkages, Collaborative Research, and Entrepreneurship & Incubation Centres.</li>
          <li><span className="tick">&#10004;</span> Managed AICTE website & web portal, as well as institutional databases.</li>
        </ul>

        <h4>ARIIA Convenor</h4>
        <ul>
          <li><span className="tick">&#10004;</span> Coordinated ARIIA-related activities, resulting in the "Band Performer Award" in 2021.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
