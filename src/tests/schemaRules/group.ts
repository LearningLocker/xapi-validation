import 'mocha';
import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import agentSchema from '../helpers/agentSchema';
import { agent, subGroup } from '../factory';

export default (test: Test) => {
  subGroup(test);
  describe('member', () => {
    subGroup((value, valid) =>
      test({
        objectType: 'Group',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        member: [value],
      }, valid)
    );
  });
  agentSchema(test);
};
