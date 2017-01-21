import Test from '../helpers/test';

export default (describer: (test: Test) => any) => (test: Test) =>
  describer((value, valid) =>
    test([value], valid)
  );
