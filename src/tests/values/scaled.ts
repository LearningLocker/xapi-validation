import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid(1.01, 'too high', test);
  itsInvalid(-1.01, 'too low', test);
  itsInvalid('', 'not a Number', test);
  itsValid(1, test);
  itsValid(0.1, test);
  itsValid(0, test);
  itsValid(-0.1, test);
  itsValid(-1, test);
};
