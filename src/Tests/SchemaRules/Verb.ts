import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { iri, languageMap } from '../Factory';

const validData = {
  id: 'http://www.example.com',
  display: {},
};

export default (test: Test) => {
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('display', languageMap, validData, test);
};
