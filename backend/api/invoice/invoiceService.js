const stringify = (data) => { return JSON.stringify(data); };
const debug = require('../../utils/debug');

const createInvoice = async () => {
    try {
        try {
            return {
                success: true
            }
        } catch (error) {
            debug.error(error.stack);
            throw new Error(error);
        }
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const checkInvoice = async () => {
    return {
        success: true
    }
} 

module.exports = { createInvoice, checkInvoice };
