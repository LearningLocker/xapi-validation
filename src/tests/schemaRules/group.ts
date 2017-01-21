import 'mocha';
import Test from '../helpers/test';
import agentSchema from '../helpers/agentSchema';
import describeMemberProp from '../describeMemberProp';
import { subGroup } from '../factory';

export default (test: Test) => {
  subGroup(test);
  describeMemberProp(subGroup, test);
  agentSchema(test);
};
