import { restrictToSchema, required } from 'rulr';
import { iri, stringValue } from '../Factory';

export default restrictToSchema({
  homePage: required(iri),
  name: required(stringValue),
});
