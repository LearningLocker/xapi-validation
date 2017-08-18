import { Rule } from 'rulr';
import objectTypeFactory from '../helpers/objectTypeFactory';
import { agent, groupAuthority } from '../factory';

export default objectTypeFactory(() => ({
  Agent: agent,
  Group: groupAuthority,
}), 'Agent') as Rule;
