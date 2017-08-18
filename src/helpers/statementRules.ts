import { composeRules, Rule } from 'rulr';
import ContextPropWarning from '../warnings/ContextPropWarning';
import VoidWarning from '../warnings/VoidWarning';
import { isObject } from 'lodash';

export default composeRules([
  (data, path) => {
    const objectIsActivity = (
      isObject(data.object) &&
      (data.object.objectType === 'Activity' || data.object.objectType === undefined)
    );
    const hasInvalidProps = (
      isObject(data.context) &&
      (data.context.platform !== undefined || data.context.revision !== undefined)
    );
    const invalidContext = !objectIsActivity && hasInvalidProps;
    return invalidContext ? [new ContextPropWarning(data, path)] : [];
  },
  (data, path) => {
    const voidVerbId = 'http://adlnet.gov/expapi/verbs/voided';
    const objectIsStatementRef = (
      data.object && data.object.objectType === 'StatementRef'
    );
    const verbIsVoid = data.verb && data.verb.id === voidVerbId;
    const hasVoidError = verbIsVoid && !objectIsStatementRef;
    return hasVoidError ? [new VoidWarning(data, path, voidVerbId)] : [];
  },
]) as Rule;
