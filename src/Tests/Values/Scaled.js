const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

module.exports = test => {
  itsInvalid(1.01, 'too high', test);
  itsInvalid(-1.01, 'too low', test);
  itsInvalid('', 'not a Number', test);
  itsValid(1, test);
  itsValid(0.1, test);
  itsValid(0, test);
  itsValid(-0.1, test);
  itsValid(-1, test);
};
