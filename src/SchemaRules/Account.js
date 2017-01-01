const { restrictToSchema, required } = require('rulr');
const { iri, string } = require('../Factory');

module.exports = restrictToSchema({
  homePage: required(iri),
  name: required(string),
});
