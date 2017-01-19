import {
  pathString,
  first,
  checkType,
  checkTypeWarning,
  Rule
} from 'rulr';

const checkNumber = (type: any, checker: (data: any) => boolean): Rule =>
  first(checkType(Number), (data, path) =>
    checker(data) ? [] : [checkTypeWarning(type)(data)(path)]
  );

export const any: Rule = () => [];
export const string: Rule = checkType(String);
export const boolean: Rule = checkType(Boolean);
export const number: Rule = checkType(Number);
export const integer: Rule = checkNumber('Integer', data =>
  (data - Math.floor(data)) === 0
);
export const scaled: Rule = checkNumber('Scaled', data =>
  (-1) <= data && data <= 1
);
