import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = '957f56b7-1d34-4b01-9408-3ffeb2053b28';

export default (test: Test) => {
  itsInvalid('957f56b7-1d34-4b01-9408-3ffeb2053b2', 'not a UUID', test);
  itsInvalid('957e56b7-1d34-4b01-9408-3ffeb2053b2', 'not a UUID with non hex digits', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
