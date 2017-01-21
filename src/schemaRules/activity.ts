import { restrictToSchema, optional, required } from 'rulr';
import { stringValue, iri, definition } from '../factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(iri),
  definition: optional(definition),
});
