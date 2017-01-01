const { restrictToSchema, required, optional } = require('rulr');
const { iri, languageMap } = require('../Factory');

module.exports = restrictToSchema({
  id: required(iri),
  display: optional(languageMap),
})
