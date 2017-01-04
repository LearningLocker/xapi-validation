const describeOptionalProp = require('./DescribeOptionalProp');
const itsInvalid = require('./ItsInvalid');
const collection = require('./Helpers/Collection');
const { interactionComponent } = require('./Factory');

const interactionComponents = collection(interactionComponent);
const allComponents = ["choices", "scale", "source", "target", "steps"];

module.exports = (validProps, type, test) => {
  validProps.forEach(prop =>
    describeOptionalProp(prop, interactionComponents, {
      interactionType: type
    }, test)
  );
  allComponents.filter(prop =>
    !validProps.includes(prop)
  ).forEach(prop =>
    itsInvalid({
      interactionType: type,
      [prop]: [],
    }, `containing unsupported component ${prop} for ${type}`, test)
  );
};
