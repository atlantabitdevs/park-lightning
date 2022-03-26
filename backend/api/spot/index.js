const express = require('express');
const router = express();
const { validateBroadcaster } = require('../../middleware/broadcastMiddleware');
const { broadcaster, mutations } = require('./spotController');

router.post('/', validateBroadcaster, broadcaster);
router.get('/mutations', mutations);

module.exports = router;
