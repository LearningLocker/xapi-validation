const { omit } = require('lodash');

module.exports = (prop, describer, validData, test) =>
  describe(prop, () => {
    it(`should return an error when missing ${prop}`, () =>
      test(omit(validData, prop), false)
    );
    describer((value, valid) =>
      test(Object.assign({}, validData, { [prop]: value }), valid)
    );
  });
