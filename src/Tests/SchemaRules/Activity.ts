import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { iri, string, definition } from '../Factory';

const validData = {
  objectType: 'Activity',
  id: 'http://www.example.com',
  definition: {},
};

export default test => {
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('definition', definition, validData, test);
};
