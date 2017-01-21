import * as assert from 'assert';
import validateStatement from './index';
import { statement } from './tests/factory';

const assertArray = (value: any, message: string) =>
  assert.equal(Array.isArray(value), true, message);

const encodeData = (data: any) =>
  JSON.stringify(data, null, 2);

statement((data, valid) => {
  const warnings = validateStatement(data);
  const encodedData = encodeData(data);
  assertArray(warnings, `result of validation is not an array ${encodeData}`);
  if (valid === true) {
    const encodedWarnings = encodeData(data);
    assert.deepEqual(
      warnings,
      [],
      `warnings were returned\n${encodedData}\n${encodedWarnings}`
    );
  } else {
    assert.equal(
      warnings.length === 0,
      false,
      `no warnings were returned\n${encodedData}`
    );
  }
});
