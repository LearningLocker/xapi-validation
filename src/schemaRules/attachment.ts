import { restrictToSchema, optional, required, Rule } from 'rulr';
import { iri, languageMap, imt, integerValue, stringValue } from '../factory';

export default restrictToSchema({
  usageType: required(iri),
  display: required(languageMap),
  description: optional(languageMap),
  contentType: required(imt),
  length: required(integerValue),
  sha2: required(stringValue),
  fileUrl: optional(iri),
}) as Rule;
