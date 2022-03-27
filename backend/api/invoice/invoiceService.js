const opennode = require('opennode');
opennode.setCredentials(process.env.OPENNODE_API_KEY);
const debug = require('../../utils/debug');

const createInvoice = async (amount, memo) => {
    try {
        const charge = await opennode.createCharge({
            amount: amount,
            currency: 'USD',
            description: JSON.stringify(memo)
        });
        return { success: true, message: charge };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

const checkInvoice = async (id) => {
    try {
        const info = await opennode.chargeInfo(id);
        return { success: true, message: info };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { createInvoice, checkInvoice };
