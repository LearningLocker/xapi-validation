import { optional } from 'rulr';
import { string, mailto, sha1, iri, account } from '../Factory';

export default {
  objectType: optional(string),
  name: optional(string),
  mbox: optional(mailto),
  mbox_sha1sum: optional(sha1),
  openid: optional(iri),
  account: optional(account),
};
