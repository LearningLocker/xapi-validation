const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'P3Y6M4DT12H30M5S';

module.exports = test => {
  itsInvalid('3Y6M4DT12H30M5S', 'not a Duration', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
