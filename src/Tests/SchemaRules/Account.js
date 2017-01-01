const describeRequiredProp = require('../DescribeRequiredProp');
const { iri, string } = require('../Factory');

const validData = {
  homePage: 'http://www.example.com',
  name: '123',
};

module.exports = test => {
  describeRequiredProp('homePage', iri, validData, test);
  describeRequiredProp('name', string, validData, test);
};
