import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'hello';

export default (test: Test) => {
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
