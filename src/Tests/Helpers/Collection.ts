import Test from '../Helpers/Test';

export default (describer: (test: Test) => any) => (test: Test) =>
  describer((value, valid) =>
    test([value], valid)
  );
