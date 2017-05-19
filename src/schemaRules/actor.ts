import { Rule } from 'rulr';
import objectTypeFactory from '../helpers/objectTypeFactory';
import { agent, group } from '../factory';

export default objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
}), 'Agent') as Rule;
