import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import {
  score,
  booleanValue,
  stringValue,
  duration,
  extensions,
} from '../factory';

const validData = {
  score: {},
  success: false,
  completion: false,
  response: 'test',
  duration: 'P3Y6M4DT12H30M5S',
  extensions: {},
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeOptionalProp('score', score, validData, test);
  describeOptionalProp('success', booleanValue, validData, test);
  describeOptionalProp('completion', booleanValue, validData, test);
  describeOptionalProp('response', stringValue, validData, test);
  describeOptionalProp('duration', duration, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
};
