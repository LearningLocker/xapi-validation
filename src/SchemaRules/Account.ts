import { restrictToSchema, required } from 'rulr';
import { iri, string } from '../Factory';

export default restrictToSchema({
  homePage: required(iri),
  name: required(string),
});
