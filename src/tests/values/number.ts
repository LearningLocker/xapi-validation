import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid('', 'not a Number', test);
  itsValid(-1.1, test);
  itsValid(0, test);
  itsValid(1.1, test);
};
