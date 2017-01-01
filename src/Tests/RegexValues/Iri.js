const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'http://www.example.com';

module.exports = test => {
  itsInvalid('http', 'not an IRI', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
