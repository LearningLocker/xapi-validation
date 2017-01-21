import { composeRules } from 'rulr';
import { contextPropError, voidError } from '../errors';

export default composeRules([
  (data, path) => {
    const objectIsActivity = (
      data.object != null &&
      data.object.constructor === Object &&
      data.object.objectType === 'Activity'
    );
    const hasInvalidProps = (
      data.context != null &&
      data.context.constructor === Object && (
        data.context.platform !== undefined ||
        data.context.revision !== undefined
      )
    );
    const invalidContext = !objectIsActivity && hasInvalidProps;
    return invalidContext ? [contextPropError(data)(path)] : [];
  },
  (data, path) => {
    const voidVerbId = 'http://adlnet.gov/expapi/verbs/voided';
    const objectIsStatementRef = (
      data.object && data.object.objectType === 'StatementRef'
    );
    const verbIsVoid = data.verb && data.verb.id === voidVerbId;
    const hasVoidError = verbIsVoid && !objectIsStatementRef;
    return hasVoidError ? [voidError(voidVerbId, data)(path)] : [];
  },
]);
