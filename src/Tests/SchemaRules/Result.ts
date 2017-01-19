import Test from '../Helpers/Test';
import describeOptionalProp from '../DescribeOptionalProp';
import {
  score,
  boolean,
  string,
  duration,
  extensions,
} from '../Factory';

const validData = {
  score: {},
  success: false,
  completion: false,
  response: 'test',
  duration: 'P3Y6M4DT12H30M5S',
  extensions: {},
};

export default (test: Test) => {
  describeOptionalProp('score', score, validData, test);
  describeOptionalProp('success', boolean, validData, test);
  describeOptionalProp('completion', boolean, validData, test);
  describeOptionalProp('response', string, validData, test);
  describeOptionalProp('duration', duration, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
};
