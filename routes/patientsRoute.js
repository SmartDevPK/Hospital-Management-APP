const express = require('express');
const router = express.Router();

const { homePage } = require('../controller/homeController.js');

// Use router.get for GET requests on '/'
router.get('/', homePage);

module.exports = router;
