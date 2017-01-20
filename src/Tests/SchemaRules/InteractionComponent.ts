import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { stringValue, languageMap } from '../Factory';

const validData = {
  id: 'test',
  description: {},
};

export default (test: Test) => {
  describeRequiredProp('id', stringValue, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
};
