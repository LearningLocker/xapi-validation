import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

export default (test: Test) => {
  itsInvalid('', 'not a Number', test);
  itsValid(-1.1, test);
  itsValid(0, test);
  itsValid(1.1, test);
};
