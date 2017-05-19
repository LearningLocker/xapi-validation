import { restrictToSchema, composeRules, optional, Rule } from 'rulr';
import statementSchema from '../helpers/statementSchema';
import statementRules from '../helpers/statementRules';
import { uuid, timestamp, authority, version } from '../factory';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    id: optional(uuid),
    stored: optional(timestamp),
    authority: optional(authority),
    version: optional(version),
  })),
  statementRules,
]) as Rule;
