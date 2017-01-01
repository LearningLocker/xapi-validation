const itsRequired = require('../ItsRequired');
const itsOptional = require('../itsOptional');
const describeCollection = require('../DescribeCollection');
const statementRules = require('../Helpers/StatementRules');
const {
  actor,
  object,
  verb,
  result,
  context,
  timestamp,
  attachments,
} = require('../Factory');

module.exports = test => {
  itsRequired('actor', {}, test);
  itsRequired('verb', {}, test);
  itsRequired('object', {}, test);
  itsOptional('result', {}, test);
  itsOptional('context', {}, test);
  itsOptional('timestamp', {}, test);
  itsOptional('attachments', {}, test);
  describeProp('actor', actor, test);
  describeProp('object', object, test);
  describeProp('verb', verb, test);
  describeProp('result', result, test);
  describeProp('context', context, test);
  describeProp('timestamp', timestamp, test);
  describeProp('attachments', attachments, test);
  statementRules(test)
};
