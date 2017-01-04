import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = 'en-US';

export default test => {
  itsInvalid('-', 'not a Language', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
