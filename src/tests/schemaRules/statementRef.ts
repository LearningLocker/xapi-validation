import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import itsInvalid from '../itsInvalid';
import { uuid } from '../factory';

const validData = {
  objectType: 'StatementRef',
  id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeRequiredProp('id', uuid, validData, test);
};
