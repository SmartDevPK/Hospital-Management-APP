const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor.js');

// Create New Doctor
router.post('/', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Doctor By ID
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor Not Found" });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Doctor By ID
router.put('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!doctor) return res.status(404).json({ message: "Doctor Not Found" });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Doctor By ID
router.delete('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor Not Found" });
        res.json({ message: "Doctor deleted successfully", doctor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
