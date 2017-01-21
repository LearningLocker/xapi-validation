import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

const validData = '4445904ac65039ef7a91506207f19162ac4dea73';

export default (test: Test) => {
  itsInvalid('test', 'not a Sha1', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
