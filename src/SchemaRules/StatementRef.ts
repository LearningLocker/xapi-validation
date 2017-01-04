import { restrictToSchema, required, optional } from 'rulr';
import { uuid, string } from '../Factory';

export default restrictToSchema({
  objectType: optional(string),
  id: required(uuid),
});
