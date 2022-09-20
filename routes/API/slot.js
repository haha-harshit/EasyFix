const express = require('express');
const router = express.Router();
// const {check, validationResult} = require('express-validator');
const passport = require('passport');

// slot controller
const slotController = require('../../controllers/API/slotController')

// #1
// mark off-hours
router.post('/mark-as-off', passport.checkAuthentication, slotController.markAsOffHours)

// #2
// GET appointment page
router.get('/appointment-plannar/:id', passport.checkAuthentication, slotController.appointment_plannar)

// #3
// POST book appointment
router.post('/book-appointment/:id', passport.checkAuthentication, slotController.book_appointment)

module.exports = router;