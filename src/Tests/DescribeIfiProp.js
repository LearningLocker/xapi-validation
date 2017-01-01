module.exports = (prop, describer, test) =>
  describe(prop, () => {
    describer((value, valid) =>
      test({ [prop]: value }, valid)
    );
  });
