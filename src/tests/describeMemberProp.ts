import Test from './helpers/test';
import 'mocha';

export default (describer: (test: Test) => void, test: Test) =>
  describe('member', () => {
    describer((value, valid) =>
      test({
        objectType: 'Group',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        member: [value],
      }, valid)
    );
  });
