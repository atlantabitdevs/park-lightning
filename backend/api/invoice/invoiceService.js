const stringify = (data) => { return JSON.stringify(data); };
const debug = require('../../utils/debug');

const createInvoice = async () => {
    try {

        try {
           
        } catch (error) {
            debug.error(error.stack);
            throw new Error(error);
        }
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { createInvoice };
