const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// home controller
const profileController = require('../../controllers/API/profileController')

// GET LOGIN page
router.get('/', passport.checkAuthentication, profileController.profile)

module.exports = router;