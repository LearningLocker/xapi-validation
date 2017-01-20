import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = '957f56b7-1d34-4b01-9408-3ffeb2053b28';

export default (test: Test) => {
  itsInvalid('957f56b7-1d34-4b01-9408-3ffeb2053b2', 'not a UUID', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
