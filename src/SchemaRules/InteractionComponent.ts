import { restrictToSchema, optional, required } from 'rulr';
import { stringValue, languageMap } from '../Factory';

export default restrictToSchema({
  id: required(stringValue),
  description: optional(languageMap),
});
