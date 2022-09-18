const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// index controller
const indexController = require('../../controllers/API/indexController');

// before log-in
router.get('/', indexController.index);

// include other routes
router.use('/api/log-in', require('./auth/logIN'))
router.use('/api/sign-up', require('./auth/signUP'))
router.use('/api/destroy-session', require('./auth/logOUT'))
router.use('/api/home', require('./home'))


module.exports = router;