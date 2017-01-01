const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'en-US';

module.exports = test => {
  itsInvalid('-', 'not a Language', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
