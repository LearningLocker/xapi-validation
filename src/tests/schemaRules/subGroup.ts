import 'mocha';
import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import describeMemberProp from '../describeMemberProp';
import agentSchema from '../helpers/agentSchema';
import { agent } from '../factory';

export default (test: Test) => {
  itsInvalid({
    objectType: 'Group',
    name: 'Test',
    member: [],
  }, 'contains no members', test);
  describeMemberProp(agent, test);
  agentSchema(test);
};
