import Test from '../helpers/test';
import objectTypeFactory, { Types } from '../helpers/objectTypeFactory';
import {
  agent,
  group,
  activity,
  subStatement,
  statementRef,
} from '../factory';

export default (additionalTypes: Types) =>
  (test: Test) =>
    objectTypeFactory(Object.assign({}, {
      Agent: agent,
      Group: group,
      Activity: activity,
      StatementRef: statementRef,
    }, additionalTypes), 'Activity', test);
