const express = require('express');
const router = express.Router();
// const {check, validationResult} = require('express-validator');
const passport = require('passport');

// home controller
const slotController = require('../../controllers/API/slotController')

// GET PROFILE page
router.post('/mark-as-off', passport.checkAuthentication, slotController.markAsOffHours)


module.exports = router;