import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = {
  'en-GB': 'test',
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    '-': 'test'
  }, 'containing invalid keys', test);
  itsInvalid({
    'en-GB': 10
  }, 'containing invalid values', test);
  itsValid(validData, test);
};
