const {
  pathString,
  first,
  checkType,
  checkTypeWarning,
} = require('rulr');

const checkNumber = (type, checker) => first(checkType(Number), (data, path) =>
  checker(data) ? [] : [checkTypeWarning(type)(data)(path)]
);

exports.any = () => [];
exports.string = checkType(String);
exports.boolean = checkType(Boolean);
exports.number = checkType(Number);
exports.integer = checkNumber('Integer', data =>
  (data - Math.floor(data)) === 0
);
exports.scaled = checkNumber('Scaled', data =>
  (-1) <= data && data <= 1
);
