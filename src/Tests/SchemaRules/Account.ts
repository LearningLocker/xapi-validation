import describeRequiredProp from '../DescribeRequiredProp';
import { iri, string } from '../Factory';

const validData = {
  homePage: 'http://www.example.com',
  name: '123',
};

export default test => {
  describeRequiredProp('homePage', iri, validData, test);
  describeRequiredProp('name', string, validData, test);
};
