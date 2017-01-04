import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = 'http://www.example.com';

export default test => {
  itsInvalid('http', 'not an IRI', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
