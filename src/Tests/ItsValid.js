module.exports = (validData, test) =>
  it(`should not return an error when data is valid`, () =>
    test(validData)
  );
