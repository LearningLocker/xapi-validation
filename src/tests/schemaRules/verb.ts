import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import { iri, languageMap } from '../factory';

const validData = {
  id: 'http://www.example.com',
  display: {},
};

export default (test: Test) => {
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('display', languageMap, validData, test);
};
