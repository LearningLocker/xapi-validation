const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'mailto:test@example.com';

module.exports = test => {
  itsInvalid('test@example.com', 'not a Mailto', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid('mailto:test@example.horse', test); // factory#8
  itsValid('mailto:te\`st@example.com', test); // factory#10
};
