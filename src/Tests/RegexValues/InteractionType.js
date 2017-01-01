const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'choice';

module.exports = test => {
  itsInvalid('choices', 'not an Interaction Type', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
};
