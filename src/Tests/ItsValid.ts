import 'mocha';
import Test from './Helpers/Test';

export default (validData: any, test: Test): any =>
  it(`should not return an error when data is valid`, () =>
    test(validData, true)
  );
