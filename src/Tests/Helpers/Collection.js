module.exports = describer => test =>
  describer((value, valid) =>
    test([value], valid)
  );
