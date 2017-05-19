import { restrictToSchema, optional, required, Rule } from 'rulr';
import { stringValue, iri, definition } from '../factory';

export default restrictToSchema({
  objectType: optional(stringValue),
  id: required(iri),
  definition: optional(definition),
}) as Rule;
