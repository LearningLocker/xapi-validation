import { restrictToSchema, composeRules, optional, Rule } from 'rulr';
import statementSchema from '../helpers/statementSchema';
import statementRules from '../helpers/statementRules';
import restrictToValue from '../helpers/restrictToValue';
import SubStatementWarning from '../warnings/SubStatementWarning';
import { isPlainObject } from 'lodash';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    objectType: optional(restrictToValue('SubStatement')),
  })),
  statementRules,
  (data, path) => {
    if (!isPlainObject(data)) return [];
    const objectIsSubStatement = (
      data.object && data.object.objectType === 'SubStatement'
    );
    return objectIsSubStatement ? [new SubStatementWarning(data, path)] : [];
  },
]) as Rule;
