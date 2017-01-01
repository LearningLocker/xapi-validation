const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = '4445904ac65039ef7a91506207f19162ac4dea73';

module.exports = test => {
  itsInvalid('test', 'not a Sha1', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
