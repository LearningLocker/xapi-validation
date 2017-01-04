import itsInvalid from '../ItsInvalid';
import itsValid from '../ItsValid';

const validData = '4445904ac65039ef7a91506207f19162ac4dea73';

export default test => {
  itsInvalid('test', 'not a Sha1', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
