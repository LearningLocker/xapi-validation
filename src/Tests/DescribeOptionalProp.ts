import { omit } from 'lodash';

export default (prop, describer, validData, test) => {
  it(`should not return an error when missing ${prop}`, () =>
    test(omit(validData, prop), true)
  );
  describe(prop, () => {
    describer((value, valid) =>
      test(Object.assign({}, validData, { [prop]: value }), valid)
    );
  });
};
