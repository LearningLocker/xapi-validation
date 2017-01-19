import Test from '../Helpers/Test';
import describeOptionalProp from '../DescribeOptionalProp';
import { scaledValue, numberValue } from '../Factory';

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
