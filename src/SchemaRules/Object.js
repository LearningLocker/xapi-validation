const objectTypeFactory = require('../Helpers/ObjectTypeFactory');
const {
  agent,
  group,
  activity,
  subStatement,
  statementRef,
} = require('../Factory');

module.exports = objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
  Activity: activity,
  SubStatement: subStatement,
  StatementRef: statementRef,
}), 'Activity');
