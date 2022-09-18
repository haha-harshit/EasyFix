const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');


// log-in controller
const loginController = require('../../../controllers/API/auth/logINcontroller')

// GET LOGIN page
router.get('/', loginController.login)

// LOGIN-session
router.post('/create-session', [
    check("email", "E-mail is required").isEmail(),
    check("password", "Password is required").isLength({min: 1})
], passport.authenticate('local', {failureRedirect: 'back'}), loginController.create_session);

module.exports = router;