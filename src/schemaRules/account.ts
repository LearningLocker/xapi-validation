import { restrictToSchema, required, Rule } from 'rulr';
import { iri, stringValue } from '../factory';

export default restrictToSchema({
  homePage: required(iri),
  name: required(stringValue),
}) as Rule;
