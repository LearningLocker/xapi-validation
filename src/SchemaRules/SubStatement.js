const { restrictToSchema, composeRules, optional } = require('rulr');
const statementSchema = require('../Helpers/StatementSchema');
const statementRules = require('../Helpers/StatementRules');
const { string } = require('../Factory');
const { subStatementError } = require('../Errors');

module.exports = composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    objectType: optional(string),
  })),
  statementRules,
  (data, path) => {
    const objectIsSubStatement = (
      data.object && data.object.objectType === "SubStatement"
    );
    return objectIsSubStatement ? [subStatementError(data)(path)] : [];
  },
]);
