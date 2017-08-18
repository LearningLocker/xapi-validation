"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestrictedValueWarning_1 = require("../warnings/RestrictedValueWarning");
exports.default = function (value) {
    return function (data, path) {
        if (data !== value) {
            return [new RestrictedValueWarning_1.default(data, path, value)];
        }
        return [];
    };
};
