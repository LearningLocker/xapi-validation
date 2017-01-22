import { checkRegex, checkTypeWarning } from 'rulr';

export default checkRegex(
  /^mailto:[A-Z0-9\.\`\'_%+-]+@[A-Z0-9.-]+\.[A-Z]{1,63}$/i
, checkTypeWarning('Mailto'));
