import { optional, Rule } from 'rulr';
import { stringValue, mailto, sha1, iri, account } from '../factory';
import restrictToValue from './restrictToValue';

export default {
  objectType: optional(restrictToValue('Agent')) as Rule,
  name: optional(stringValue),
  mbox: optional(mailto),
  mbox_sha1sum: optional(sha1),
  openid: optional(iri),
  account: optional(account),
};
