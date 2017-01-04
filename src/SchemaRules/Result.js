const { restrictToSchema, optional } = require('rulr');
const {
  scaled,
  number,
  boolean,
  string,
  duration,
  extensions,
} = require('../Factory');

const score = restrictToSchema({
  scaled: optional(scaled),
  raw: optional(number),
  min: optional(number),
  max: optional(number),
});

module.exports = restrictToSchema({
  score: optional(score),
  success: optional(boolean),
  completion: optional(boolean),
  response: optional(string),
  duration: optional(duration),
  extensions: optional(extensions),
});
