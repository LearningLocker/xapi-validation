const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const { string, uuid } = require('../Factory');

const validData = {
  objectType: 'StatementRef',
  id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};

module.exports = test => {
  describeRequiredProp('id', uuid, validData, test);
};
