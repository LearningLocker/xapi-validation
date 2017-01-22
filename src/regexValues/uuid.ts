import { checkRegex, checkTypeWarning } from 'rulr';

export default checkRegex(
  /^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[8,9,a,b][A-Z0-9]{3}-[A-Z0-9]{12}\}?$/i
, checkTypeWarning('Universal Unique Identifier (UUID)'));
