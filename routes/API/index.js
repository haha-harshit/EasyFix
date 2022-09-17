const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// index controller
const indexController = require('../../controllers/API/indexController');

// before log-in
router.get('/', indexController.index);

// include other routes
router.use('/log-in', require('./logIN'))
router.use('/sign-up', require('./signUP'))

module.exports = router;