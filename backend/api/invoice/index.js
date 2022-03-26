const express = require('express');
const router = express();

const { createInvoice } = require('./invoiceController');

router.post('/create', createInvoice);

module.exports = router;
