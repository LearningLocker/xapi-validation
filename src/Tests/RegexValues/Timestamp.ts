import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = '20090131T230000-0100';

export default (test: Test) => {
  itsInvalid('2009-01-31T230000-01:00', 'not a Timestamp', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid('2009-01-31T23:00:00-01:00', test); // Extended
};
