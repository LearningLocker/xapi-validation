import { restrictToSchema, required, optional } from 'rulr';
import { uuid, stringValue } from '../factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(uuid),
});
