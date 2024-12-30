import React from 'react';
import './Memberships.css';

const Memberships = () => {
  const memberships = [
    {
      organization: "Institution of Engineers India (IEI)",
      country: "India",
      membershipNo: "M-1594502",
    },
    {
      organization: "Institute of Electrical and Electronics Engineers (IEEE)",
      country: "USA",
      membershipNo: "95091075",
    },
  ];

  return (
    <div className="memberships-container">
      <div className="summary-list">
        {memberships.map((member, index) => (
          <li key={index}>
            Member of {member.organization} ({member.country}), Membership Number: {member.membershipNo}.
          </li>
        ))}
      </div>
    </div>
  );
};

export default Memberships;
