import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = {
  'http://www.example.com': 'test',
};

export default (test: Test) => {
  itsInvalid({
    'http': 'test'
  }, 'containing invalid keys', test);
  itsValid(validData, test);
};
