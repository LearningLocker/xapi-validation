const describeOptionalProp = require('../DescribeOptionalProp');
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
  describe('mbox', () => mailto(test));
  describe('mbox_sha1sum', () => sha1(test));
  describe('openid', () => iri(test));
  describe('account', () => account(test));
};
