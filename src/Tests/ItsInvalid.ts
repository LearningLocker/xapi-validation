import 'mocha';
import Test from './Helpers/Test';

export default (invalidData: any, message: string, test: Test): any =>
  it(`should return an error when data is ${message}`, () =>
    test(invalidData, false)
  );
