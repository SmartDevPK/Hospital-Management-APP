const express = require('express');
const router = express.Router();

// Controller imports
const { homePage, showPa } = require('../controller/homeController.js');
const { showAddPatientForm, addPatient,  showedPatients } = require('../controller/patientController.js');

// Home page route
router.get('/', homePage);

// Show "Add Patient" form (GET)
router.get('/addPatient', showAddPatientForm);

// Handle form submission (POST)
router.post('/addPatient', addPatient);

// Show Patient in database
router.get("/", showedPatients)

module.exports = router;
