"use strict";
var _a = require('rulr'), pathString = _a.pathString, first = _a.first, checkType = _a.checkType, checkTypeWarning = _a.checkTypeWarning;
var checkNumber = function (type, checker) { return first(checkType(Number), function (data, path) {
    return checker(data) ? [] : [checkTypeWarning(type)(data)(path)];
}); };
exports.any = function () { return []; };
exports.string = checkType(String);
exports.boolean = checkType(Boolean);
exports.number = checkType(Number);
exports.integer = checkNumber('Integer', function (data) {
    return (data - Math.floor(data)) === 0;
});
exports.scaled = checkNumber('Scaled', function (data) {
    return (-1) <= data && data <= 1;
});
