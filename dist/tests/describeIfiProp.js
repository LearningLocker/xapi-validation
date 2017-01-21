"use strict";
require("mocha");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (prop, describer, test) {
    return describe(prop, function () {
        describer(function (value, valid) {
            var data = (_a = {}, _a[prop] = value, _a);
            test(data, valid);
            var _a;
        });
    });
};
