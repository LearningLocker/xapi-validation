import Test from './Helpers/Test';
import 'mocha';

export default (prop: string, describer: (test: Test) => void, test: Test) =>
  describe(prop, () => {
    describer((value, valid) =>
      test({ [prop]: value }, valid)
    );
  });
