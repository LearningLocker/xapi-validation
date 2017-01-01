const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

module.exports = test => {
  itsInvalid(10, 'not a Boolean', test);
  itsValid(true, test);
  itsValid(false, test);
};
