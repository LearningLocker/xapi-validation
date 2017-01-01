const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const { iri, languageMap, imt, integer, string } = require('../Factory');

const validData = {
  usageType: 'http://www.example.com',
  display: {},
  description: {},
  contentType: 'application/json',
  length: 10,
  sha2: 'test',
  fileUrl: 'http://www.example.com',
};

module.exports = test => {
  describeRequiredProp('usageType', iri, validData, test);
  describeRequiredProp('display', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeRequiredProp('contentType', imt, validData, test);
  describeRequiredProp('length', integer, validData, test);
  describeRequiredProp('sha2', string, validData, test);
  describeOptionalProp('fileUrl', iri, validData, test);
};
