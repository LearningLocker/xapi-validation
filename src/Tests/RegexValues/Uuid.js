const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = '957f56b7-1d34-4b01-9408-3ffeb2053b28';

module.exports = test => {
  itsInvalid('957f56b7-1d34-4b01-9408-3ffeb2053b2', 'not a UUID', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
