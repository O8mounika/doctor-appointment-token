const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorName: String,
  date: String,
  time: String,
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('Appointment', appointmentSchema);
