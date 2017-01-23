import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import statementSchema from '../helpers/statementSchema';
import validStatementData from '../helpers/validStatementData';
import { uuid, timestamp, authority, version, object } from '../factory';

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeOptionalProp('id', uuid, validStatementData, test);
  describeOptionalProp('stored', timestamp, validStatementData, test);
  describeOptionalProp('authority', authority, validStatementData, test);
  describeOptionalProp('version', version, validStatementData, test);
  describeRequiredProp('object', object, validStatementData, test);
  statementSchema(test);
};
