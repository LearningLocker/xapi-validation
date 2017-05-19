"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
exports.default = function (types, defaultType, test) {
    itsInvalid_1.default(10, 'not an object', test);
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
