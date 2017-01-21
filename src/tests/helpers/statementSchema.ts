import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import validStatementData from '../helpers/validStatementData';
import statementRules from '../helpers/statementRules';
import collection from '../helpers/collection';
import {
  actor,
  verb,
  result,
  context,
  timestamp,
  attachment,
} from '../factory';

const attachments = collection(attachment);

export default (test: Test) => {
  describeRequiredProp('actor', actor, validStatementData, test);
  describeRequiredProp('verb', verb, validStatementData, test);
  describeOptionalProp('result', result, validStatementData, test);
  describeOptionalProp('context', context, validStatementData, test);
  describeOptionalProp('timestamp', timestamp, validStatementData, test);
  describeOptionalProp('attachments', attachments, validStatementData, test);
  statementRules((data, valid) =>
    test(Object.assign({}, validStatementData, data), valid)
  );
};
