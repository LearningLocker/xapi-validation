import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import collection from '../helpers/collection';
import { activity } from '../factory';

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
