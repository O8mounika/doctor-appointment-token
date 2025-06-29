const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      user: req.user.userId
    });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.userId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};