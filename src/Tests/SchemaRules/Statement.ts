import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import statementSchema from '../Helpers/StatementSchema';
import validStatementData from '../Helpers/ValidStatementData';
import { uuid, timestamp, authority, version, object } from '../Factory';

export default (test: Test) => {
  describeOptionalProp('id', uuid, validStatementData, test);
  describeOptionalProp('stored', timestamp, validStatementData, test);
  describeOptionalProp('authority', authority, validStatementData, test);
  describeOptionalProp('version', version, validStatementData, test);
  describeRequiredProp('object', object, validStatementData, test);
  statementSchema(test);
};
