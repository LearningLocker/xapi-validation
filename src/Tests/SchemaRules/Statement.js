const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const statementSchema = require('../Helpers/StatementSchema');
const { uuid, timestamp, authority, version, object } = require('../Factory');

const validData = {
  actor: {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
  },
  verb: {
    id: 'http://www.example.com',
  },
  object: {
    objectType: 'Activity',
    id: 'http://www.example.com',
  },
};

module.exports = test => {
  describeOptionalProp('id', uuid, validData, test);
  describeOptionalProp('stored', timestamp, validData, test);
  describeOptionalProp('authority', authority, validData, test);
  describeOptionalProp('version', version, validData, test);
  describeRequiredProp('object', object, validData, test);
  statementSchema(test);
};
