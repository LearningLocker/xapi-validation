import { required, optional, restrictToCollection, Rule } from 'rulr';
import {
  actor,
  verb,
  object,
  result,
  context,
  timestamp,
  attachment,
} from '../factory';

export default {
  actor: required(actor) as Rule,
  verb: required(verb),
  object: required(object),
  result: optional(result),
  context: optional(context),
  timestamp: optional(timestamp),
  attachments: optional(restrictToCollection(() => attachment)),
};
