import { restrictToSchema, optional, required } from 'rulr';
import { stringValue, iri, definition } from '../Factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(iri),
  definition: optional(definition),
});
