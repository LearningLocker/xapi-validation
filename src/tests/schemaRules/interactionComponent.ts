import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import { stringValue, languageMap } from '../factory';

const validData = {
  id: 'test',
  description: {},
};

export default (test: Test) => {
  describeRequiredProp('id', stringValue, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
};
