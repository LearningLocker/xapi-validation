"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var lodash_1 = require("lodash");
exports.default = function (missingValid, description) {
    return function (prop, describer, validData, test) {
        it(description + " " + prop, function () {
            return test(lodash_1.omit(validData, prop), missingValid);
        });
        describe(prop, function () {
            describer(function (value, valid) {
                var overrides = (_a = {}, _a[prop] = value, _a);
                var data = Object.assign({}, validData, overrides);
                test(data, valid);
                var _a;
            });
        });
    };
};
