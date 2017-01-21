import { restrictToSchema, optional, required } from 'rulr';
import { stringValue, languageMap } from '../factory';

export default restrictToSchema({
  id: required(stringValue),
  description: optional(languageMap),
});
