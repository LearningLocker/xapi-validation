const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

module.exports = test => {
  itsInvalid('', 'not a Number', test);
  itsValid(-1.1, test);
  itsValid(0, test);
  itsValid(1.1, test);
};
