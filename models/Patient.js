const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: Date,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  phone: String,
  email: {
    type: String,
    unique: true,
  },
  address: String,
  medicalHistory: [String],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Patient', patientSchema);
