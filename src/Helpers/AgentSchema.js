const { optional } = require('rulr');
const { string, mailto, sha1, iri, account } = require('../Factory');

module.exports = {
  objectType: optional(string),
  name: optional(string),
  mbox: optional(mailto),
  mbox_sha1sum: optional(sha1),
  openid: optional(iri),
  account: optional(account),
};
