import describeOptionalProp from '../DescribeOptionalProp';
import itsInvalid from '../ItsInvalid';
import agentSchema from '../Helpers/AgentSchema';
import { agent } from '../Factory';

export default test => {
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
