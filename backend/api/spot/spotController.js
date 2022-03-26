const broadcastService = require('./spotService');
const debug = require('../../utils/debug');

const broadcaster = async (req, res) => {
  try {
    const stringData = req.body.stringData
    const mutationType = req.body.mutationType.toLowerCase();
    const response = await broadcastService.broadcastString(stringData, mutationType);
    debug.info(`Broadcaster Response: ${JSON.stringify(response)}`);
    if (!response.success) {
      res.status(500).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    debug.error(error.stack);
    res.status(500).json({message: error.message, error: error.stack});
  }
};

const mutations = async (req, res) => {
  try {
    const response = await broadcastService.mutations();
    debug.info(`Mutations Response: ${JSON.stringify(response)}`);
    if (!response.success) {
      res.status(500).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    debug.error(error.stack);
    res.status(500).json({message: error.message, error: error.stack});
  }
};

module.exports = {
  broadcaster,
  mutations
};