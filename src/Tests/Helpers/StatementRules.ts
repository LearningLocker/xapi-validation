import Test from '../Helpers/Test';
const statementRef = {
  objectType: 'StatementRef',
  id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};
const activity = {
  objectType: 'Activity',
  id: 'http://www.example.com',
};
const platform = 'Test';
const revision = 'Test';
const verb = {
  id: 'http://adlnet.gov/expapi/verbs/voided',
};

export default (test: Test) => {
  it('should return an error when platform is set incorrectly', () =>
    test({
      object: statementRef,
      context: { platform },
    }, false)
  );
  it('should return an error when revision is set incorrectly', () =>
    test({
      object: statementRef,
      context: { revision },
    }, false)
  );
  it('should not return an error when context is used correctly', () =>
    test({
      object: activity,
      context: { platform, revision },
    }, true)
  );
  it('should return an error when void is used incorrectly', () =>
    test({
      object: activity,
      verb,
    }, false)
  );
  it('should not return an error when void is used correctly', () =>
    test({
      object: statementRef,
      verb,
    }, true)
  );
};
