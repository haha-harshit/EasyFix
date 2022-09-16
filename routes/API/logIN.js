const express = require('express');

const router = express.Router();

const passport = require('passport');


// log-in controller
const loginController = require('../../controllers/API/logINcontroller')

router.get('/', loginController.login)

module.exports = router;