const {
  pathString,
  first,
  checkType,
  checkTypeWarning,
} = require('rulr');

const checkNumber = (type, checker) => first(checkType(Number), (data, path) =>
  checker(data) ? [] : [checkTypeWarning(type)(data)(path)]
);

export const any = () => [];
export const string = checkType(String);
export const boolean = checkType(Boolean);
export const number = checkType(Number);
export const integer = checkNumber('Integer', data =>
  (data - Math.floor(data)) === 0
);
export const scaled = checkNumber('Scaled', data =>
  (-1) <= data && data <= 1
);
