"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (types, defaultType, test) {
    Object.keys(types).forEach(function (type) {
        return types[type](function (data, valid) {
            return test(Object.assign({}, {
                objectType: type,
            }, valid));
        });
    });
    types[defaultType](test);
};
