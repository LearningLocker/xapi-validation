const { restrictToSchema, required, optional } = require('rulr');
const { uuid, string } = require('../Factory');

module.exports = restrictToSchema({
  objectType: optional(string),
  id: required(uuid),
});
