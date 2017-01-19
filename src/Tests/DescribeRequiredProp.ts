import 'mocha';
import Test from './Helpers/Test';
import { omit } from 'lodash';

export default (prop: string, describer: (test: Test) => void, validData: any, test: Test) => {
  it(`should return an error when missing ${prop}`, () =>
    test(omit(validData, prop), false)
  );
  describe(prop, () => {
    describer((value, valid) =>
      test(Object.assign({}, validData, { [prop]: value }), valid)
    );
  });
};
