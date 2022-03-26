const debug = require('../../utils/debug');
const invoiceService = require('./invoiceService');

const createInvoice = async (req, res) => {
    try {
        const amount = req.body.amount;
        const memo = req.body.memo;
        const response = await invoiceService.createInvoice(amount, memo);

        debug.info(`Invoice Creation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const checkInvoice = async (req, res) => {
    try {
        const amount = req.body.amount;
        const licensePlate = req.body.licensePlate;
        const duration = req.body.duration;
        const response = await invoiceService.broadcastString(
            stringData,
            mutationType
        );

        debug.info(`Invoice Creation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { createInvoice };
