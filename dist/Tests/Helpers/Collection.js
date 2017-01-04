"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (describer) { return function (test) {
    return describer(function (value, valid) {
        return test([value], valid);
    });
}; };
