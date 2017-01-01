const describeOptionalProp = require('../DescribeOptionalProp');
const { scaled, number } = require('../Factory');

const validData = {
  scaled: 0,
  raw: 0,
  min: 0,
  max: 0,
};

module.exports = test => {
  describeOptionalProp('scaled', scaled, validData, test);
  describeOptionalProp('raw', number, validData, test);
  describeOptionalProp('min', number, validData, test);
  describeOptionalProp('max', number, validData, test);
};
