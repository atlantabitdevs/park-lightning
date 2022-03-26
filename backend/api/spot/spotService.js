const debug = require('../../utils/debug');

const getParkingSpotDetails = async () => {
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

module.exports = { getParkingSpotDetails };
