import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import itsInvalid from '../ItsInvalid';
import statementSchema from '../Helpers/StatementSchema';
import { subStatementObject } from '../Factory';

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
  itsInvalid(Object.assign({}, validData, {
    object: {
      objectType: 'SubStatement',
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
    },
  }), 'object is a SubStatement', test);
  describeRequiredProp('object', subStatementObject, validData, test);
  statementSchema((data, valid) =>
    test(Object.assign({}, data), valid)
  );
};
