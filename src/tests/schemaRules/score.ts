import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import { scaledValue, numberValue } from '../factory';

const validData = {
  scaled: 0,
  raw: 0,
  min: 0,
  max: 0,
};

export default (test: Test) => {
  describeOptionalProp('scaled', scaledValue, validData, test);
  describeOptionalProp('raw', numberValue, validData, test);
  describeOptionalProp('min', numberValue, validData, test);
  describeOptionalProp('max', numberValue, validData, test);
};
