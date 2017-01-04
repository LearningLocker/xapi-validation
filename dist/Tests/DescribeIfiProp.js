"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (prop, describer, test) {
    return describe(prop, function () {
        describer(function (value, valid) {
            return test((_a = {}, _a[prop] = value, _a), valid);
            var _a;
        });
    });
};
