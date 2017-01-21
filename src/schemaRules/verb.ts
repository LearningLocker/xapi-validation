import { restrictToSchema, required, optional } from 'rulr';
import { iri, languageMap } from '../factory';

export default restrictToSchema({
  id: required(iri),
  display: optional(languageMap),
});
