import objectTypeFactory from '../Helpers/ObjectTypeFactory';
import { agent, group } from '../Factory';

export default test =>
  objectTypeFactory({
    Agent: agent,
    Group: group,
  }, 'Agent', test);
