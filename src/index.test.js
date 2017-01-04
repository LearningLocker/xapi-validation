const assert = require('assert');
const validateStatement = require('./index');
const { statement } = require('./Tests/Factory');

statement('statement', (statement, valid) => {
  const warnings = validateStatement(statement);
  assert.isArray(result, 'result of validation is not an array');
  if (valid === true) {
    assert.deepEqual(warnings, [], 'warnings were returned');
  } else {
    assert.isAbove(result.length, 0, 'no warnings were returned');
  }
});
