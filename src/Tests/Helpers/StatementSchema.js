const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const statementRules = require('../Helpers/StatementRules');
const collection = require('../Helpers/Collection');
const {
  actor,
  object,
  verb,
  result,
  context,
  timestamp,
  attachment,
} = require('../Factory');

const attachments = collection(attachment);

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
  describeRequiredProp('actor', actor, validData, test);
  describeRequiredProp('verb', verb, validData, test);
  describeOptionalProp('result', result, validData, test);
  describeOptionalProp('context', context, validData, test);
  describeOptionalProp('timestamp', timestamp, validData, test);
  describeOptionalProp('attachments', attachments, validData, test);
  statementRules((data, valid) =>
    test(Object.assign({}, validData, data), valid)
  );
};
