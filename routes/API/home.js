const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const passport = require('passport');

// home controller
const homeController = require('../../controllers/API/homeController')

// GET LOGIN page
router.get('/', passport.checkAuthentication, homeController.home)

module.exports = router;