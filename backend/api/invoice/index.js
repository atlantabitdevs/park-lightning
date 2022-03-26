const express = require('express');
const router = express();

const { createInvoice, checkInvoice } = require('./invoiceController');

router.post('/create', createInvoice);
router.post('/check', checkInvoice);

module.exports = router;
