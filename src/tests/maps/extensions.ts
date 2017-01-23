import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = {
  'http://www.example.com': 'test',
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    http: 'test'
  }, 'containing invalid keys', test);
  itsValid(validData, test);
};
