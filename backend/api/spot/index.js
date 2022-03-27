const express = require('express');
const router = express();

const { getParkingSpotDetails, reserveParkingSpot, shouldBeEmpty } = require('./spotController');

router.get('/details', getParkingSpotDetails);
router.post('/reserve', reserveParkingSpot);
router.get('/empty', shouldBeEmpty)

module.exports = router;
