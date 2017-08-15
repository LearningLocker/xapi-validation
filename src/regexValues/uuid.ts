import { checkRegex, Rule } from 'rulr';
import { createTypeWarning } from '../warnings/TypeWarning';

export default checkRegex(
  /^\{?[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[8,9,A,B][A-F0-9]{3}-[A-F0-9]{12}\}?$/i
, createTypeWarning('Universal Unique Identifier (UUID)')) as Rule;
