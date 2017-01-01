const { required, optional, restrictToCollection } = require('rulr');
const {
  actor,
  verb,
  object,
  result,
  context,
  timestamp,
  attachment,
} = require('../Factory');

module.exports = {
  actor: required(actor),
  verb: required(verb),
  object: required(object),
  result: optional(result),
  context: optional(context),
  timestamp: optional(timestamp),
  attachments: optional(restrictToCollection(() => attachment)),
};
