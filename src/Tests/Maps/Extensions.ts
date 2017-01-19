import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = {
  'http://www.example.com': 'test',
};

export default (test: Test) => {
  itsInvalid({
    'http': 'test'
  }, 'containing invalid keys', test);
  itsValid(validData, test);
};
