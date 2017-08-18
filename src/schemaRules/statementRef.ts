import { restrictToSchema, required, optional, Rule } from 'rulr';
import { uuid } from '../factory';
import restrictToValue from '../helpers/restrictToValue';

export default restrictToSchema({
  objectType: optional(restrictToValue('StatementRef')),
  id: required(uuid),
}) as Rule;
