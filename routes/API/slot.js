const express = require('express');
const router = express.Router();
// const {check, validationResult} = require('express-validator');
const passport = require('passport');

// slot controller
const slotController = require('../../controllers/API/slotController')

// mark off-hours
router.post('/mark-as-off', passport.checkAuthentication, slotController.markAsOffHours)


// book an appointment

module.exports = router;