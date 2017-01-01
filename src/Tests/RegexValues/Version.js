const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = '1.0.0';

module.exports = test => {
  itsInvalid('1.0', 'not a Version', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
