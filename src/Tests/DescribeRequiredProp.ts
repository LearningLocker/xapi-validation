import { omit } from 'lodash';

export default (prop, describer, validData, test) => {
  it(`should return an error when missing ${prop}`, () =>
    test(omit(validData, prop), false)
  );
  describe(prop, () => {
    describer((value, valid) =>
      test(Object.assign({}, validData, { [prop]: value }), valid)
    );
  });
};
