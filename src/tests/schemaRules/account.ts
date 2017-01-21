import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import { iri, stringValue } from '../factory';

const validData = {
  homePage: 'http://www.example.com',
  name: '123',
};

export default (test: Test) => {
  describeRequiredProp('homePage', iri, validData, test);
  describeRequiredProp('name', stringValue, validData, test);
};
