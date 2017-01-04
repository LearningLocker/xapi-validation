const describeRequiredProp = require('../DescribeRequiredProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const itsInvalid = require('../ItsInvalid');
const statementSchema = require('../Helpers/StatementSchema');
const { string, subStatementObject } = require('../Factory');

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
};

module.exports = test => {
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
  describeRequiredProp('object', subStatementObject, validData, test);
  statementSchema((data, valid) =>
    test(Object.assign({}, validData, data), valid)
  )
};
