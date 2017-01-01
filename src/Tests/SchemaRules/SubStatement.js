const describeOptionalProp = require('../DescribeOptionalProp');
const itsInvalid = require('../ItsInvalid');
const statementSchema = require('../Helpers/StatementSchema');
const { string } = require('../Factory');

const validData = {
  objectType: 'SubStatement';
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
};

module.exports = test => {
  describeOptionalProp('objectType', string, validData, test);
  itsInvalid(Object.assign({}, validData, {
    object: {
      objectType: 'SubStatement',
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
    },
  }), 'object is a SubStatement', test);
  statementSchema((data, valid) =>
    test(Object.assign({}, validData, data), valid);
  )
};
