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

module.exports = test => {
  describeRequiredProp('actor', actor, {}, test);
  describeRequiredProp('object', object, {}, test);
  describeRequiredProp('verb', verb, {}, test);
  describeOptionalProp('result', result, {}, test);
  describeOptionalProp('context', context, {}, test);
  describeOptionalProp('timestamp', timestamp, {}, test);
  describeOptionalProp('attachments', attachments, {}, test);
  statementRules(test)
};
