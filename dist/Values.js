"use strict";
var rulr_1 = require("rulr");
var checkNumber = function (type, checker) {
    return rulr_1.first(rulr_1.checkType(Number), function (data, path) {
        return checker(data) ? [] : [rulr_1.checkTypeWarning(type)(data)(path)];
    });
};
exports.any = function () { return []; };
exports.string = rulr_1.checkType(String);
exports.boolean = rulr_1.checkType(Boolean);
exports.number = rulr_1.checkType(Number);
exports.integer = checkNumber('Integer', function (data) {
    return (data - Math.floor(data)) === 0;
});
exports.scaled = checkNumber('Scaled', function (data) {
    return (-1) <= data && data <= 1;
});
