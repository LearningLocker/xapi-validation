const describeOptionalProp = require('../DescribeOptionalProp');
const statementSchema = require('../Helpers/StatementSchema');
const { uuid, timestamp, authority, version } = require('../Factory');

const validData = {
  actor: {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
  },
  verb: {
    id: 'http://www.example.com',
  },
  object: {
    objectType: 'Activity',
    id: 'http://www.example.com',
  },
  result: {},
  context: {},
  timestamp: '2016-12-31T18:45:21+00:00',
  attachments: [],
  id: 'd0310d1c-65fe-4b59-9d4f-c56de054243a',
  stored: '2016-12-31T18:45:21+00:00',
  authority: {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com'
  },
  version: '1.0.0',
};

module.exports = test => {
  describeOptionalProp('id', uuid, validData, test);
  describeOptionalProp('stored', timestamp, validData, test);
  describeOptionalProp('authority', authority, validData, test);
  describeOptionalProp('version', version, validData, test);
  statementSchema((data, valid) =>
    test(Object.assign({}, validData, data), valid)
  );
};
