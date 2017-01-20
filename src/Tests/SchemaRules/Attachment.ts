import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { iri, languageMap, imt, integerValue, stringValue } from '../Factory';

const validData = {
  usageType: 'http://www.example.com',
  display: {},
  description: {},
  contentType: 'application/json',
  length: 10,
  sha2: 'test',
  fileUrl: 'http://www.example.com',
};

export default (test: Test) => {
  describeRequiredProp('usageType', iri, validData, test);
  describeRequiredProp('display', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeRequiredProp('contentType', imt, validData, test);
  describeRequiredProp('length', integerValue, validData, test);
  describeRequiredProp('sha2', stringValue, validData, test);
  describeOptionalProp('fileUrl', iri, validData, test);
};
