import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import itsInvalid from '../ItsInvalid';
import statementSchema from '../Helpers/StatementSchema';
import validStatementData from '../Helpers/ValidStatementData';
import { subStatementObject } from '../Factory';

export default (test: Test) => {
  itsInvalid(Object.assign({}, validStatementData, {
    object: Object.assign({}, validStatementData, {
      objectType: 'SubStatement',
    }),
  }), 'object is a SubStatement', test);
  describeRequiredProp('object', subStatementObject, validStatementData, test);
  statementSchema((data, valid) =>
    test(Object.assign({}, data), valid)
  );
};
