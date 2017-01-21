import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'choice';

export default (test: Test) => {
  itsInvalid('choices', 'not an Interaction Type', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
