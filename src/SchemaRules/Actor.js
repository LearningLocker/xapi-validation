const objectTypeFactory = require('../Helpers/ObjectTypeFactory');
const { agent, group } = require('../Factory');

module.exports = objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
}), 'Agent');
