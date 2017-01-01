const { restrictToSchema, optional, required } = require('rulr');
const { iri, languageMap, imt, integer, string } = require('../Factory');

module.exports = restrictToSchema({
  usageType: required(iri),
  display: required(languageMap),
  description: optional(languageMap),
  contentType: required(imt),
  length: required(integer),
  sha2: required(string),
  fileUrl: optional(iri),
});
