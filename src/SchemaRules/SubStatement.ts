import { restrictToSchema, composeRules, optional } from 'rulr';
import statementSchema from '../Helpers/StatementSchema';
import statementRules from '../Helpers/StatementRules';
import { stringValue } from '../Factory';
import { subStatementError } from '../Errors';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    objectType: optional(stringValue),
  })),
  statementRules,
  (data, path) => {
    const objectIsSubStatement = (
      data.object && data.object.objectType === 'SubStatement'
    );
    return objectIsSubStatement ? [subStatementError(data)(path)] : [];
  },
]);
