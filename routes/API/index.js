const express = require('express');

const router = express.Router();

const passport = require('passport');

const indexController = require('../../controllers/API/indexController');

// before log-in
router.get('/', indexController.index);


module.exports = router;