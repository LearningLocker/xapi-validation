import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import { iri, definition } from '../factory';

const validData = {
  objectType: 'Activity',
  id: 'http://www.example.com',
  definition: {},
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('definition', definition, validData, test);
};
