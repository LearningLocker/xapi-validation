export default describer => test =>
  describer((value, valid) =>
    test([value], valid)
  );
