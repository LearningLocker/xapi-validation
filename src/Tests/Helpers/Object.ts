import Test from '../Helpers/Test';
import objectTypeFactory, { Types } from '../Helpers/ObjectTypeFactory';
import {
  agent,
  group,
  activity,
  subStatement,
  statementRef,
} from '../Factory';

export default (additionalTypes: Types) =>
  (test: Test) =>
    objectTypeFactory(Object.assign({}, {
      Agent: agent,
      Group: group,
      Activity: activity,
      StatementRef: statementRef,
    }, additionalTypes), 'Activity', test);
