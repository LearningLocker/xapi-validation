import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

export default test => {
  itsInvalid(10, 'not a Boolean', test);
  itsValid(true, test);
  itsValid(false, test);
};
