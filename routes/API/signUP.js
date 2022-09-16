const express = require('express');

const router = express.Router();

const passport = require('passport');


// sign-up controller
const signupController = require('../../controllers/API/signUPcontrollers')

router.get('/', signupController.signup)

module.exports = router;