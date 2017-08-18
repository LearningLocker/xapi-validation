import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import { scaledValue, numberValue } from '../factory';

const validData = {};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    min: 1,
    raw: 0,
  }, 'raw less than min', test);
  itsInvalid({
    max: 0,
    raw: 1,
  }, 'raw more than max', test);
  itsInvalid({
    max: 0,
    min: 1,
  }, 'min more than max', test);
  describeOptionalProp('scaled', scaledValue, validData, test);
  describeOptionalProp('raw', numberValue, validData, test);
  describeOptionalProp('min', numberValue, validData, test);
  describeOptionalProp('max', numberValue, validData, test);
};
