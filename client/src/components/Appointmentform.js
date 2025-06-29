import React, { useState } from 'react';
import API from '../api';

function AppointmentForm() {
  const [form, setForm] = useState({ doctorName: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/appointments/book', form);
    alert('Appointment booked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="doctorName" value={form.doctorName} onChange={handleChange} placeholder="Doctor Name" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;
