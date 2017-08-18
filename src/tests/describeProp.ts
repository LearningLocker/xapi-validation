import 'mocha';
import Test from './helpers/test';
import { omit } from 'lodash';

export default (missingValid: boolean, description: string) =>
  (prop: string, describer: (test: Test) => void, validData: any, test: Test) => {
    it(`${description} ${prop}`, () =>
      test(omit(validData, prop), missingValid)
    );
    describe(prop, () => {
      describer((value, valid) => {
        const overrides = { [prop]: value };
        const data = Object.assign({}, validData, overrides);
        test(data, valid);
      });
    });
  };
