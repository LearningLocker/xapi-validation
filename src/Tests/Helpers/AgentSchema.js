const describeOptionalProp = require('../DescribeOptionalProp');
const describeIfiProp = require('../DescribeIfiProp');
const itsInvalid = require('../ItsInvalid');
const {
  string,
  mailto,
  sha1,
  iri,
  account,
} = require('../Factory');

const validData = {
  mbox: 'mailto:test@example.com',
};

module.exports = test => {
  describeOptionalProp('name', string, validData, test);
  describeIfiProp('mbox', mailto, test);
  describeIfiProp('mbox_sha1sum', sha1, test);
  describeIfiProp('openid', iri, test);
  describeIfiProp('account', account, test);
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
  }, 'missing an IFI', test);
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
    mbox: 'mailto:test@example.com',
    openid: 'http://www.example.com',
  }, 'containing too many IFIs', test);
};
