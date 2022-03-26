const express = require('express');
const router = express();

const { getParkingSpotDetails } = require('./spotController');

router.get('/details', getParkingSpotDetails);

module.exports = router;
