const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');


// sign-up controller
const signupController = require('../../../controllers/API/auth/signUPcontrollers')

// GET SIGN-UP FORM
router.get('/', signupController.signup)

// POST SIGN-UP request || create user
router.post('/sign-up', [
    // express-validation
    check("username", "Name must be at least 3 chars long").isLength({ min: 3 }),
    check("email", "E-mail is required").isEmail(),
    check("password", "Password must be atleast 4 char").isLength({min: 4}) 
]);

module.exports = router;