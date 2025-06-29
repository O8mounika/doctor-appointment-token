import React from 'react';

function DoctorList() {
  const doctors = ['Dr. A Sharma', 'Dr. B Rao', 'Dr. C Iyer'];
  return (
    <div>
      <h3>Available Doctors</h3>
      <ul>
        {doctors.map((doc, index) => <li key={index}>{doc}</li>)}
      </ul>
    </div>
  );
}

export default DoctorList;