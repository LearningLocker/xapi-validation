const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const { iri, languageMap } = require('../Factory');

const validData = {
  id: 'http://www.example.com',
  display: {},
};

module.exports = test => {
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('display', languageMap, validData, test);
};
