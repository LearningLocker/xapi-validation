import Test from '../Helpers/Test';
import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { iri, definition } from '../Factory';

const validData = {
  objectType: 'Activity',
  id: 'http://www.example.com',
  definition: {},
};

export default (test: Test) => {
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('definition', definition, validData, test);
};
