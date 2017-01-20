import Test from '../Helpers/Test';
import describeOptionalProp from '../DescribeOptionalProp';
import collection from '../Helpers/Collection';
import { activity } from '../Factory';

const validData = {
  parent: [],
  category: [],
  grouping: [],
  other: [],
};

const activities = collection(activity);

export default (test: Test) => {
  describeOptionalProp('parent', activities, validData, test);
  describeOptionalProp('category', activities, validData, test);
  describeOptionalProp('grouping', activities, validData, test);
  describeOptionalProp('other', activities, validData, test);
};
