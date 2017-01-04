import objectTypeFactory from '../Helpers/ObjectTypeFactory';
import { agent, group } from '../Factory';

export default objectTypeFactory(() => ({
  Agent: agent,
  Group: group,
}), 'Agent');
