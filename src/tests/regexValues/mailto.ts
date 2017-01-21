import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = 'mailto:test@example.com';

export default (test: Test) => {
  itsInvalid('test@example.com', 'not a Mailto', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid('mailto:test@example.horse', test); // factory#8
  itsValid('mailto:te\`st@example.com', test); // factory#10
};
