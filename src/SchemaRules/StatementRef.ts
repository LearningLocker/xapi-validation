import { restrictToSchema, required, optional } from 'rulr';
import { uuid, stringValue } from '../Factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(uuid),
});
