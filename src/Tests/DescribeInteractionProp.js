const describeOptionalProp = require('./DescribeOptionalProp');
const collection = require('./Helpers/Collection');
const { interactionComponent } = require('./Factory');

const interactionComponents = collection(interactionComponent);

module.exports = (prop, type, test) =>
  describeOptionalProp(prop, interactionComponents, {
    interactionType: type
  }, test);
