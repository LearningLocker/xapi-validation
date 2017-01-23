import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import itsInvalid from '../itsInvalid';
import statementSchema from '../helpers/statementSchema';
import validStatementData from '../helpers/validStatementData';
import { subStatementObject } from '../factory';

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
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
