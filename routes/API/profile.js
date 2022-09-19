const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// home controller
const profileController = require('../../controllers/API/profileController')

// GET PROFILE page
router.get('/', passport.checkAuthentication, profileController.profile)

// GET update profile
router.get('/update-profile/:id', passport.checkAuthentication, profileController.update_profile)

// POST update profile
router.post('/update-profile-ok/:id',[
    check("username", "Username must be at least 3 chars long").isLength({ min: 3 }),
    check("email", "E-mail is required").isEmail(),
] ,passport.checkAuthentication, profileController.update_profile_ok);

module.exports = router;