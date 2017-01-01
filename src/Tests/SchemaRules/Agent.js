const describeOptionalProp = require('../DescribeOptionalProp');
const agentSchema = require('../Helpers/StatementSchema');
const { uuid, timestamp, authority, version } = require('../Factory');

module.exports = test => {
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
  }, 'missing an IFI', test);
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
    mbox: 'mailto:test@example.com',
    openid: 'http://www.example.com',
  }, 'containing too many IFIs', test);
  agentSchema(test);
};
