import { restrictToSchema, required, optional, Rule } from 'rulr';
import { iri, languageMap } from '../factory';

export default restrictToSchema({
  id: required(iri),
  display: optional(languageMap),
}) as Rule;
