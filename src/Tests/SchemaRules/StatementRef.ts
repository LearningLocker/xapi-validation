import describeRequiredProp from '../DescribeRequiredProp';
import describeOptionalProp from '../DescribeOptionalProp';
import { string, uuid } from '../Factory';

const validData = {
  objectType: 'StatementRef',
  id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};

export default test => {
  describeRequiredProp('id', uuid, validData, test);
};
