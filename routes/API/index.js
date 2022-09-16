const express = require('express');

const router = express.Router();

const passport = require('passport');

// index controller
const indexController = require('../../controllers/API/indexController');

// log-in controller
const loginController = require('../../controllers/API/logINcontroller')

// before log-in
router.get('/', indexController.index);

// include other routes
router.use('/log-in', require('./logIN'))

module.exports = router;