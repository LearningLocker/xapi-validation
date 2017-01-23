import 'mocha';
import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import agentSchema from '../helpers/agentSchema';
import describeMemberProp from '../describeMemberProp';
import { subGroup } from '../factory';

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  subGroup(test);
  describeMemberProp(subGroup, test);
  agentSchema(test);
};
