const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');


// log-out controller
const logOUTController = require('../../../controllers/API/auth/logOUTcontroller')

// destroying session(logging out)
router.get('/', logOUTController.destroy_session);

module.exports = router;