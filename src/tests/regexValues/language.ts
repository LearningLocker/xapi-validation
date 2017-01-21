import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'en-US';

export default (test: Test) => {
  itsInvalid('-', 'not a Language', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
