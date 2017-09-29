import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import objectTypeFactory from '../helpers/objectTypeFactory';
import {
  uuid,
  actor,
  group,
  contextActivities,
  stringValue,
  language,
  statementRef,
  extensions,
} from '../factory';

const validData = {
  registration: 'd0310d1c-65fe-4b59-9d4f-c56de054243a',
  instructor: {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
  },
  team: {
    objectType: 'Group',
    mbox: 'mailto:test@example.com',
  },
  contextActivities: {},
  revision: 'Test',
  platform: 'Test',
  language: 'en-US',
  statement: {
    objectType: 'StatementRef',
    id: 'd0310d1c-65fe-4b59-9d4f-c56de054243a',
  },
  extensions: {},
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({ team: null }, 'team must be an object', test);
  describeOptionalProp('registration', uuid, validData, test);
  describeOptionalProp('instructor', actor, validData, test);
  describeOptionalProp('team', (test: Test) => {
    return objectTypeFactory({
      Group: group
    }, 'Group', test, {});
  }, validData, test);
  describeOptionalProp('contextActivities', contextActivities, validData, test);
  describeOptionalProp('revision', stringValue, validData, test);
  describeOptionalProp('platform', stringValue, validData, test);
  describeOptionalProp('language', language, validData, test);
  describeOptionalProp('statement', (test: Test) => {
    return objectTypeFactory({
      StatementRef: statementRef
    }, 'StatementRef', test, {});
  }, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
};
