import { restrictToSchema, required, optional } from 'rulr';
import { iri, languageMap } from '../Factory';

export default restrictToSchema({
  id: required(iri),
  display: optional(languageMap),
})
