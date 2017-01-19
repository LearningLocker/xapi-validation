import Test from './Helpers/Test';
import 'mocha';

export default (prop, describer, test: Test) =>
  describe(prop, () => {
    describer((value, valid) =>
      test({ [prop]: value }, valid)
    );
  });
