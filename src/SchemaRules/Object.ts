import objectTypeFactory from '../Helpers/ObjectTypeFactory';
import {
  agent,
  group,
  activity,
  subStatement,
  statementRef,
} from '../Factory';

export default objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
  Activity: activity,
  SubStatement: subStatement,
  StatementRef: statementRef,
}), 'Activity');
