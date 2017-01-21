import Test from './helpers/test';
import 'mocha';

export default (prop: string, describer: (test: Test) => void, test: Test) =>
  describe(prop, () => {
    describer((value, valid) =>
      test({ [prop]: value }, valid)
    );
  });
