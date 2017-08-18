import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import collection from '../helpers/collection';
import objectTypeFactory from '../helpers/objectTypeFactory';
import { activity } from '../factory';

const validData = {
  parent: [],
  category: [],
  grouping: [],
  other: [],
};

const activities = collection((test: Test) => {
  return objectTypeFactory({
    Activity: activity
  }, 'Activity', test, {});
});

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  describeOptionalProp('parent', activities, validData, test);
  describeOptionalProp('category', activities, validData, test);
  describeOptionalProp('grouping', activities, validData, test);
  describeOptionalProp('other', activities, validData, test);
};
