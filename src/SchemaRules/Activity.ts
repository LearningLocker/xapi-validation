import { restrictToSchema, optional, required } from 'rulr';
import { string, iri, definition } from '../Factory';

export default restrictToSchema({
  objectType: optional(string),
  id: required(iri),
  definition: optional(definition),
});
