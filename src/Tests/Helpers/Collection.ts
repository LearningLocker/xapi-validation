import Test from '../Helpers/Test';

export default describer => (test: Test) =>
  describer((value, valid) =>
    test([value], valid)
  );
