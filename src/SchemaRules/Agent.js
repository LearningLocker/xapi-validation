const { composeRules, restrictToSchema } = require('rulr');
const agentSchema = require('../Helpers/AgentSchema');
const getUsedIfis = require('../Helpers/GetUsedIfis');
const { ifiCountError, noIfiError } = require('../Errors');

module.exports = composeRules([
  restrictToSchema(agentSchema),
  (data, path) => {
    const usedIfis = getUsedIfis(data);
    if (usedIfis.length > 1) return [ifiCountError(usedIfis, data)(path)];
    if (usedIfis.length === 0) return [noIfiError(data)(path)];
    return [];
  },
]);
