const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = 'application/json';

module.exports = test => {
  itsInvalid('applications/json', 'not a IMT', test);
  itsInvalid(10, 'not a String', test);
  itsValid(validData, test);
  itsValid(
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    test
  ); // v1#819
};
