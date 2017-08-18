import 'mocha';
import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';

export type Type = (test: Test) => any;
export type Types = {[key: string]: Type};

export default (types: Types, defaultType: string, test: Test, validDefaultData: object): void => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    ...validDefaultData,
    objectType: 'InvalidObjectType',
  }, 'not a valid objectType', test);
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
