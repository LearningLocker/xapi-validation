import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = {
  'en-GB': 'test',
};

export default test => {
  itsInvalid({
    '-': 'test'
  }, 'containing invalid keys', test);
  itsInvalid({
    'en-GB': 10
  }, 'containing invalid values', test);
  itsValid(validData, test);
};
