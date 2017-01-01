const { restrictToSchema, optional, required } = require('rulr');
const { string, languageMap } = require('../Factory');

module.exports = restrictToSchema({
  id: required(string),
  description: optional(languageMap),
});
