const itsInvalid = require('../ItsInvalid');
const itsValid = require('../ItsValid');

const validData = {
  'http://www.example.com': 'test',
};

module.exports = test => {
  itsInvalid({
    'http:': 'test'
  }, 'containing invalid keys', test);
  itsValid(validData, test);
};
