import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import { stringValue, languageMap } from '../factory';

const validData = {
  id: 'test',
  description: {},
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeRequiredProp('id', stringValue, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
};
