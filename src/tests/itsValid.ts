import 'mocha';
import Test from './helpers/test';

export default (validData: any, test: Test): any =>
  it(`should not return an error when data is valid`, () =>
    test(validData, true)
  );
