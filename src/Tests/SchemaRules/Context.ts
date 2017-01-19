import Test from '../Helpers/Test';
import describeOptionalProp from '../DescribeOptionalProp';
import {
  uuid,
  actor,
  group,
  contextActivities,
  string,
  language,
  statementRef,
  extensions,
} from '../Factory';

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
  describeOptionalProp('registration', uuid, validData, test);
  describeOptionalProp('instructor', actor, validData, test);
  describeOptionalProp('team', group, validData, test);
  describeOptionalProp('contextActivities', contextActivities, validData, test);
  describeOptionalProp('revision', string, validData, test);
  describeOptionalProp('platform', string, validData, test);
  describeOptionalProp('language', language, validData, test);
  describeOptionalProp('statement', statementRef, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
};
