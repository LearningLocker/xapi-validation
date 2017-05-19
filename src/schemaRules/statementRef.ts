import { restrictToSchema, required, optional, Rule } from 'rulr';
import { uuid, stringValue } from '../factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(uuid),
}) as Rule;
