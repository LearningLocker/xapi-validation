const objectTypeFactory = require('../Helpers/ObjectTypeFactory');
const { agent, group } = require('../Factory');

module.exports = test =>
  objectTypeFactory({
    Agent: agent,
    Group: group,
  }, 'Agent', test);
