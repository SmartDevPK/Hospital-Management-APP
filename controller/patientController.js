const Patient = require('../models/Patient.js');


// Show the Add Patient Form Page (GET)
exports.showAddPatientForm = (req, res) => {
  try {
    res.render('addPatient'); // Renders views/addPatient.ejs
  } catch (error) {
    console.error('Error rendering add patient form:', error);
    res.status(500).send('Error loading form');
  }
};


// Handle Add Patient Form Submission 
exports.addPatient = async (req, res) => {
  try {
    const { name, dob, gender, phone, email, address, medicalHistory } = req.body;

    const newPatient = new Patient({
      name,
      dob,
      gender,
      phone,
      email,
      address,
      medicalHistory,
    });

    const savedPatient = await newPatient.save();

    //  Redirect to homepage or a patient list page after successful save
    res.redirect('/'); 

  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).send('Failed to add patient: ' + error.message);
  }
};
