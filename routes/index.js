const express = require('express').Router();
const chirpsRouter = require('./chirps');

let router = express.Router();

router.use('/chirps', chirpsRouter)

module.exports = router;