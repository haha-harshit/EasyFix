const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');


// sign-up controller
const signupController = require('../../../controllers/API/auth/signUPcontrollers')

// GET SIGN-UP FORM
router.get('/', signupController.signup_page)

// POST SIGN-UP request || create user
router.post('/create-account', [
    // express-validation
    check("username", "Name must be at least 3 chars long").isLength({ min: 3 }),
    check("email", "E-mail is required").isEmail(),
    check("password", "Password must be atleast 4 char").isLength({min: 4}),
    // check("confirm_password", "Confirm Password must be atleast 4 char").isLength({min: 4}),
], signupController.create_account);
 
module.exports = router;