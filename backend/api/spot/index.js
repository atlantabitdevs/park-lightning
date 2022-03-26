const express = require('express');
const router = express();

const { getParkingSpotDetails, reserveParkingSpot } = require('./spotController');

router.get('/details', getParkingSpotDetails);
router.post('/reserve', reserveParkingSpot);

module.exports = router;
