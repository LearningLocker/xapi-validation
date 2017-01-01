const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'hello';

module.exports = test => {
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
