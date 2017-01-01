const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const { iri, string, definition } = require('../Factory');

const validData = {
  objectType: 'Activity',
  id: 'http://www.example.com',
  definition: {},
};

module.exports = test => {
  describeOptionalProp('objectType', string, validData, test);
  describeRequiredProp('id', iri, validData, test);
  describeOptionalProp('definition', definition, validData, test);
};
