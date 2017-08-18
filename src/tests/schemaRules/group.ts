import 'mocha';
import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import agentSchema from '../helpers/agentSchema';
import describeMemberProp from '../describeMemberProp';
import { subGroup, agent } from '../factory';
import objectTypeFactory from '../helpers/objectTypeFactory';

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  subGroup(test);
  describeMemberProp((test: Test) => {
    return objectTypeFactory({
      Agent: agent,
      Group: subGroup,
    }, 'Agent', test, { mbox: 'mailto:test@example.org' });
  }, test);
  agentSchema(test);
};
