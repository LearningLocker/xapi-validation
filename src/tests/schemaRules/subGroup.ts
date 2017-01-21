import 'mocha';
import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import agentSchema from '../helpers/agentSchema';
import { agent } from '../factory';

export default (test: Test) => {
  itsInvalid({
    objectType: 'Group',
    name: 'Test',
    member: [],
  }, 'contains no members', test);
  describe('member', () => {
    agent((value, valid) =>
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
