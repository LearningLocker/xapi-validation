import assert from 'assert';
import validateStatement from './index';
import { statement } from './Tests/Factory';

const assertArray = (value, message) =>
  assert.equal(Array.isArray(value), true, message);

statement((statement, valid) => {
  const warnings = validateStatement(statement, []);
  assertArray(warnings, 'result of validation is not an array');
  if (valid === true) {
    assert.deepEqual(warnings, [], 'warnings were returned');
  } else {
    assert.equal(warnings.length === 0, false, 'no warnings were returned');
  }
});
