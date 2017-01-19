import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import statementSchema from '../Helpers/StatementSchema';
import { uuid, timestamp, authority, version, object } from '../Factory';

const validData = {
  actor: {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
  },
  verb: {
    id: 'http://www.example.com',
  },
  object: {
    objectType: 'Activity',
    id: 'http://www.example.com',
  },
};

export default (test: Test) => {
  describeOptionalProp('id', uuid, validData, test);
  describeOptionalProp('stored', timestamp, validData, test);
  describeOptionalProp('authority', authority, validData, test);
  describeOptionalProp('version', version, validData, test);
  describeRequiredProp('object', object, validData, test);
  statementSchema(test);
};
