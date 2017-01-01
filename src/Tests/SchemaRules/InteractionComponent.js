const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const { string, languageMap } = require('../Factory');

const validData = {
  id: 'test',
  description: {},
};

module.exports = test => {
  describeRequiredProp('id', string, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
};
