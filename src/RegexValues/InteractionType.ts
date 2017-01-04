import { checkRegex } from 'rulr';

export default checkRegex(
  /^((choice)|(sequencing)|(likert)|(matching)|(performance)|(true-false)|(fill-in)|(long-fill-in)|(numeric)|(other))$/
);
