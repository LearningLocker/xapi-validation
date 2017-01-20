import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import validStatementData from '../Helpers/ValidStatementData';
import statementRules from '../Helpers/StatementRules';
import collection from '../Helpers/Collection';
import {
  actor,
  object,
  verb,
  result,
  context,
  timestamp,
  attachment,
} from '../Factory';

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
