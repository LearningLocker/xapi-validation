import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import { iri, string } from '../Factory';

const validData = {
  homePage: 'http://www.example.com',
  name: '123',
};

export default (test: Test) => {
  describeRequiredProp('homePage', iri, validData, test);
  describeRequiredProp('name', string, validData, test);
};
