const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// home controller
const profileController = require('../../controllers/API/profileController')

// GET PROFILE page
router.get('/', passport.checkAuthentication, profileController.profile)

// GET update profile
router.get('/update-profile', passport.checkAuthentication, profileController.update_profile)


module.exports = router;