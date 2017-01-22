import { checkRegex, checkTypeWarning } from 'rulr';

export default checkRegex(
  /^1\.0\.[0-9]+$/
, checkTypeWarning('Version'));
