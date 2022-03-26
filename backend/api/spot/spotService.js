const debug = require('../../utils/debug');
const spots = require('../../db/collection');

const getParkingSpotDetails = async (uuid) => {
    try {
        return { success: true, spot: (await spots.doc(uuid).get()).data() };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const reserveParkingSpot = async (uuid, licensePlate, duration) => {
    try {
        const spot = spots.doc(uuid);
        const startTime = Math.floor(new Date().getTime() / 1000);
        if (!spot.occupied) {
            var response = await spot.update({
                duration: duration,
                expirationTime: startTime + duration,
                expired: false,
                licensePlate: licensePlate,
                occupied: true,
                startTime: startTime,
            });

            return { success: true, message: response };
        }
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { getParkingSpotDetails, reserveParkingSpot };
