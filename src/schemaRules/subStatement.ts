import { restrictToSchema, composeRules, optional } from 'rulr';
import statementSchema from '../helpers/statementSchema';
import statementRules from '../helpers/statementRules';
import { stringValue } from '../factory';
import { subStatementError } from '../errors';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    objectType: optional(stringValue),
  })),
  statementRules,
  (data, path) => {
    const objectIsSubStatement = (
      data.object && data.object.objectType === 'SubStatement'
    );
    return objectIsSubStatement ? [subStatementError()(path)] : [];
  },
]);
