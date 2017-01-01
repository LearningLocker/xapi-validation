const { restrictToSchema, composeRules, optional } = require('rulr');
const statementSchema = require('../Helpers/StatementSchema');
const statementRules = require('../Helpers/StatementRules');
const { uuid, timestamp, authority, version } = require('../Factory');

module.exports = composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    id: optional(uuid),
    stored: optional(timestamp),
    authority: optional(authority),
    version: optional(version),
  })),
  statementRules,
]);
