const describeOptionalProp = require('../DescribeOptionalProp');
const describeIfiProp = require('../DescribeIfiProp');
const {
  string,
  mailto,
  sha1,
  iri,
  account,
} = require('../Factory');

module.exports = test => {
  describeOptionalProp('objectType', string, {}, test);
  describeOptionalProp('name', string, {}, test);
  describeIfiProp('mbox', mailto, test);
  describeIfiProp('mbox_sha1sum', sha1, test);
  describeIfiProp('openid', iri, test);
  describeIfiProp('account', account, test);
};
