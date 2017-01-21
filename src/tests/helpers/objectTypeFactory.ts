import 'mocha';
import Test from '../helpers/test';

export type Type = (test: Test) => any;
export type Types = {[key: string]: Type};

export default (types: Types, defaultType: string, test: Test): void => {
  Object.keys(types).forEach((type: string) => {
    describe(`Object Type: ${type}`, () => {
      types[type]((data: any, valid: boolean): any => {
          test(Object.assign({}, data, {
            objectType: type,
          }), valid);
      });
    });
  });
  describe(`Default Object Type: ${defaultType} `, () => {
    types[defaultType](test);
  });
};
