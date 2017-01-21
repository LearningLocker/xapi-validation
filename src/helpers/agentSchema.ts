import { optional } from 'rulr';
import { stringValue, mailto, sha1, iri, account } from '../factory';

export default {
  objectType: optional(stringValue),
  name: optional(stringValue),
  mbox: optional(mailto),
  mbox_sha1sum: optional(sha1),
  openid: optional(iri),
  account: optional(account),
};
