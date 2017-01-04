const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = {
  'en-GB': 'test',
};

module.exports = test => {
  itsInvalid({
    '-': 'test'
  }, 'containing invalid keys', test);
  itsInvalid({
    'en-GB': 10
  }, 'containing invalid values', test);
  itsValid(validData, test);
};
