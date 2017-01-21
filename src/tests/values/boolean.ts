import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid(10, 'not a Boolean', test);
  itsValid(true, test);
  itsValid(false, test);
};
