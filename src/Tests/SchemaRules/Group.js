const describeOptionalProp = require('../DescribeOptionalProp');
const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');
const agentSchema = require('../Helpers/AgentSchema');

module.exports = test => {
  itsInvalid({
    objectType: 'Group',
    name: 'Test',
    member: [],
  }, 'no members', test);
  describe('member', () => {
    actor((value, valid) =>
      test({
        objectType: 'Group',
        name: 'Test',
        mbox: 'mailto:test@example.com'
        member: [value]
      }, valid)
    );
  });
  agentSchema(test);
};
