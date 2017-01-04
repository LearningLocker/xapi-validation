export default (invalidData, message, test) =>
  it(`should return an error when data is ${message}`, () =>
    test(invalidData, false)
  );
