import Test from '../Helpers/Test';
import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = 'application/json';

export default (test: Test) => {
  itsInvalid('applications/json', 'not a IMT', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid(
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    test
  ); // v1#819
};
