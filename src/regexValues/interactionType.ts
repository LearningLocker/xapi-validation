import { checkRegex, checkTypeWarning } from 'rulr';

export default checkRegex(
  /^((choice)|(sequencing)|(likert)|(matching)|(performance)|(true-false)|(fill-in)|(long-fill-in)|(numeric)|(other))$/
, checkTypeWarning('Interaction Type'));
