"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
exports.default = function (types, defaultType, test, validDefaultData) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default(__assign({}, validDefaultData, { objectType: 'InvalidObjectType' }), 'not a valid objectType', test);
    Object.keys(types).forEach(function (type) {
        describe("Object Type: " + type, function () {
            types[type](function (data, valid) {
                test(Object.assign({}, data, {
                    objectType: type,
                }), valid);
            });
        });
    });
    describe("Default Object Type: " + defaultType + " ", function () {
        types[defaultType](test);
    });
};
