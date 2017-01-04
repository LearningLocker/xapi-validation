import { restrictToSchema, optional, required } from 'rulr';
import { iri, languageMap, imt, integer, string } from '../Factory';

export default restrictToSchema({
  usageType: required(iri),
  display: required(languageMap),
  description: optional(languageMap),
  contentType: required(imt),
  length: required(integer),
  sha2: required(string),
  fileUrl: optional(iri),
});
