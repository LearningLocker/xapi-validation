const describeOptionalProp = require('../DescribeOptionalProp');
const collection = require('../Helpers/Collection');
const { activity } = require('../Factory');

const validData = {
  parent: [],
  category: [],
  grouping: [],
  other: [],
};

const activities = collection(activity);

module.exports = test => {
  describeOptionalProp('parent', activities, validData, test);
  describeOptionalProp('category', activities, validData, test);
  describeOptionalProp('grouping', activities, validData, test);
  describeOptionalProp('other', activities, validData, test);
};
