const describeInteractionProp = require('../DescribeInteractionProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const {
  languageMap,
  iri,
  extensions,
  interactionType,
  string,
} = require('../Factory');

const validData = {};

module.exports = test => {
  describeOptionalProp('name', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeOptionalProp('type', iri, validData, test);
  describeOptionalProp('moreInfo', iri, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
  describeOptionalProp('interactionType', interactionType, validData, test);
  describeOptionalProp('correctResponsePattern', string, validData, test);

  // describeInteractionProp('choice', 'choice', test);
  // describeInteractionProp('choices', 'sequencing', test);
  // describeInteractionProp('scale', 'likert', test);
  // describeInteractionProp('source', 'matching', test);
  // describeInteractionProp('target', 'matching', test);
  // describeInteractionProp('steps', 'performance', test);

  // invalidComponentsError
};
