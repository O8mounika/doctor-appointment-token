import React, { useEffect, useState } from 'react';
import API from '../api';
import AppointmentForm from '../components/AppointmentForm';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await API.get('/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.error('Error fetching appointments:', err.response?.data || err.message);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <AppointmentForm />
      <h3>Your Appointments</h3>
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            {a.doctorName} - {a.date} at {a.time} ({a.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
