import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

export default test => {
  itsInvalid(1.01, 'too high', test);
  itsInvalid(-1.01, 'too low', test);
  itsInvalid('', 'not a Number', test);
  itsValid(1, test);
  itsValid(0.1, test);
  itsValid(0, test);
  itsValid(-0.1, test);
  itsValid(-1, test);
};
