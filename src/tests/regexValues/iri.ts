import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'http://www.example.com';

export default (test: Test) => {
  itsInvalid('http', 'not an IRI', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
