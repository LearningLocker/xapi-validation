import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'P3Y6M4DT12H30M5S';
const validData2 = 'P4W';

export default (test: Test) => {
  itsInvalid('3Y6M4DT12H30M5S', 'not a Duration', test);
  itsInvalid('P4W1D', 'not a Duration', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid(validData2, test);
};
