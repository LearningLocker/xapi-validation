const describeOptionalProp = require('../DescribeOptionalProp');
const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');
const agentSchema = require('../Helpers/AgentSchema');

const agentMember = {
  objectType: 'Agent',
  mbox: 'mailto:test@example.com',
};

module.exports = test => {
  itsInvalid({
    objectType: 'Group',
    member: [],
  }, 'contains no members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember],
  }, 'contains too few members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember, agentMember],
  }, 'contains too many members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, {
      objectType: 'Group',
      mbox: 'mailto:test@example.com',
    }],
  }, 'contains group members', test);
  itsValid({
    objectType: 'Group',
    member: [agentMember, agentMember],
  }, test);
  agentSchema(test);
};
