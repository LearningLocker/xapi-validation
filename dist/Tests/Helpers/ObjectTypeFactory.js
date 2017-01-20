"use strict";
require("mocha");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (types, defaultType, test) {
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
