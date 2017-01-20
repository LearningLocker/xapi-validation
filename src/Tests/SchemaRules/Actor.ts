import Test from '../Helpers/Test';
import objectTypeFactory from '../Helpers/ObjectTypeFactory';
import { agent, group } from '../Factory';

export default (test: Test) =>
  objectTypeFactory({
    Agent: agent,
    Group: group,
  }, 'Agent', test);
