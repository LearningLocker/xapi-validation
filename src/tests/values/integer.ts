import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid(1.1, 'not a Integer', test);
  itsInvalid('', 'not a Number', test);
  itsValid(10, test);
  itsValid(0, test);
};
