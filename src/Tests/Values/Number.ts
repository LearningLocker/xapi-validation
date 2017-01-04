import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

export default test => {
  itsInvalid('', 'not a Number', test);
  itsValid(-1.1, test);
  itsValid(0, test);
  itsValid(1.1, test);
};
