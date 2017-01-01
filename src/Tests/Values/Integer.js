const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

module.exports = test => {
  itsInvalid(1.1, 'not a Integer', test);
  itsInvalid('', 'not a Number', test);
  itsValid(10, test);
  itsValid(0, test);
};
