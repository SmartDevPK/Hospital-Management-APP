const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    phone: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    availableDays: [String],
    availableTime: {
      start: String, // e.g., "09:00"
      end: String,   // e.g., "17:00"
    },
  },
  {
    timestamps: true, // Enable createdAt and updatedAt timestamps
  }
);

module.exports = mongoose.model('Doctor', doctorSchema)
