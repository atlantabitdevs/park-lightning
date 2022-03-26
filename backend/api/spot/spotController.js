const spotService = require('./spotService');
const debug = require('../../utils/debug');

const getParkingSpotDetails = async (req, res) => {
  // try {
    var query = req._parsedUrl.query.split('=')[1];
    console.log(query)
    // const response = await spotService.getParkingSpotDetails();
    
    // debug.info(`Spot Response: ${JSON.stringify(response)}`);
    
  //   if (!response.success) {
  //     res.status(500).json(response);
  //   } else {
  //     res.status(200).json(response);
  //   }
  // } catch (error) {
  //   debug.error(error.stack);
  //   res.status(500).json({message: error.message, error: error.stack});
  // }
};

module.exports = { getParkingSpotDetails };