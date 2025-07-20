const Doctor = require('../models/Doctor.js');
const Patient = require('../models/Patient.js');
const Appointment = require('../models/Appointment.js');

const homePage = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    const patients = await Patient.find();
    const appointments = await Appointment.find()
      .populate('doctor')   // populate doctor info in appointment
      .populate('patient'); // populate patient info in appointment

    res.render('index', { doctors, patients, appointments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading home page');
  }
};

module.exports = { homePage };
