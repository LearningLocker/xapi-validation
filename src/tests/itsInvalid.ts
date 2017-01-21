import 'mocha';
import Test from './helpers/test';

export default (invalidData: any, message: string, test: Test): any =>
  it(`should return an error when data is ${message}`, () =>
    test(invalidData, false)
  );
