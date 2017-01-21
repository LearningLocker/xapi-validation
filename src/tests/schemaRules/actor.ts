import Test from '../helpers/test';
import objectTypeFactory from '../helpers/objectTypeFactory';
import { agent, group } from '../factory';

export default (test: Test) =>
  objectTypeFactory({
    Agent: agent,
    Group: group,
  }, 'Agent', test);
