const { restrictToSchema, optional, required } = require('rulr');
const { string, iri, definition } = require('../Factory');

module.exports = restrictToSchema({
  objectType: optional(string),
  id: required(iri),
  definition: optional(definition),
});
