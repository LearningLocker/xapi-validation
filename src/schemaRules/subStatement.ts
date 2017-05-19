import { restrictToSchema, composeRules, optional, Rule } from 'rulr';
import statementSchema from '../helpers/statementSchema';
import statementRules from '../helpers/statementRules';
import { stringValue } from '../factory';
import SubStatementWarning from '../warnings/SubStatementWarning';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    objectType: optional(stringValue),
  })),
  statementRules,
  (data, path) => {
    const objectIsSubStatement = (
      data.object && data.object.objectType === 'SubStatement'
    );
    return objectIsSubStatement ? [new SubStatementWarning(data, path)] : [];
  },
]) as Rule;
