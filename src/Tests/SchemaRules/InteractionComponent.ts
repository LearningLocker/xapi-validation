import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { string, languageMap } from '../Factory';

const validData = {
  id: 'test',
  description: {},
};

export default test => {
  describeRequiredProp('id', string, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
};
