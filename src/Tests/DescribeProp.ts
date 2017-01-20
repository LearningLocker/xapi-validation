import 'mocha';
import Test from './Helpers/Test';
import { omit } from 'lodash';

export default (missingValid: boolean, description: string) =>
  (prop: string, describer: (test: Test) => void, validData: any, test: Test) => {
    it(`${description} ${prop}`, () =>
      test(omit(validData, prop), missingValid)
    );
    describe(prop, () => {
      describer((value, valid) =>
        test(Object.assign({}, validData, { [prop]: value }), valid)
      );
    });
  };
