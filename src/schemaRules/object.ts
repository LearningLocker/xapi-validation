import { Rule } from 'rulr';
import objectTypeFactory from '../helpers/objectTypeFactory';
import {
  agent,
  group,
  activity,
  subStatement,
  statementRef,
} from '../factory';

export default objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
  Activity: activity,
  SubStatement: subStatement,
  StatementRef: statementRef,
}), 'Activity') as Rule;
