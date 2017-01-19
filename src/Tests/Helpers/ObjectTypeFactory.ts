import Test from '../Helpers/Test';

export type Type = (test: Test) => any;
export type Types = {[key: string]: Type};

export default (types: Types, defaultType: string, test: Test): void => {
  Object.keys(types).forEach((type: string) =>
    types[type]((data: any, valid: boolean): any =>
      test(Object.assign({}, data, {
        objectType: type,
      }), valid)
    )
  );
  types[defaultType](test);
};
