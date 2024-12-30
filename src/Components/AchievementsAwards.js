import './AchievementsAwards.css';

import React from 'react';

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2>ACHIEVEMENTS AND AWARDS</h2>
      <table className="achievements-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Award</th>
            <th>Institution/Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>TISLA Award (Best Student Advisor)</td>
            <td>Institution of Engineers India, Tiruvallur</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Best Paper in National Centenary Technical Conference</td>
            <td>Institution of Engineers (India), Tamil Nadu State</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>Best Researcher Award (High Cumulative Impact Factor 11.13)</td>
            <td>SPIHER</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>Teaching Excellence Award</td>
            <td>The International Association of Lions Clubs</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>Best Institute Industry Coordinator</td>
            <td>Knowledge Exchange</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>Best Researcher Award (High Cumulative Impact Factor 15.14)</td>
            <td>SPIHER</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Achievements;
