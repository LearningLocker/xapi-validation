import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = '1.0.0';

export default (test: Test) => {
  itsInvalid('1.0', 'not a Version', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
