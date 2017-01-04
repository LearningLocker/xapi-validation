import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

export default test => {
  itsInvalid(1.1, 'not a Integer', test);
  itsInvalid('', 'not a Number', test);
  itsValid(10, test);
  itsValid(0, test);
};
