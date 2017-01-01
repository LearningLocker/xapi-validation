const describeOptionalProp = require('../DescribeOptionalProp');
const { activities } = require('../Factory');

const validData = {
  parent: [],
  category: [],
  grouping: [],
  other: [],
};

module.exports = test => {
  describeOptionalProp('parent', activities, validData, test);
  describeOptionalProp('category', activities, validData, test);
  describeOptionalProp('grouping', activities, validData, test);
  describeOptionalProp('other', activities, validData, test);
};
