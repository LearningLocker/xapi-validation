import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = 'choice';

export default test => {
  itsInvalid('choices', 'not an Interaction Type', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
