import { restrictToSchema, composeRules, optional } from 'rulr';
import statementSchema from '../Helpers/StatementSchema';
import statementRules from '../Helpers/StatementRules';
import { uuid, timestamp, authority, version } from '../Factory';

export default composeRules([
  restrictToSchema(Object.assign({}, statementSchema, {
    id: optional(uuid),
    stored: optional(timestamp),
    authority: optional(authority),
    version: optional(version),
  })),
  statementRules,
]);
