import { restrictToSchema, optional, required } from 'rulr';
import { string, languageMap } from '../Factory';

export default restrictToSchema({
  id: required(string),
  description: optional(languageMap),
});
