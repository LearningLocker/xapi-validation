import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = 'hello';

export default (test: Test) => {
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
