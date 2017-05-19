import { restrictToSchema, optional, required, Rule } from 'rulr';
import { stringValue, languageMap } from '../factory';

export default restrictToSchema({
  id: required(stringValue),
  description: optional(languageMap),
}) as Rule;
