"use strict";
var rulr_1 = require("rulr");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (types, defaultType, error) {
    if (error === void 0) { error = function (data) { return rulr_1.warn("Invalid object type `" + data + "`"); }; }
    return rulr_1.first(rulr_1.checkType(Object), function (data, path) {
        var typeRules = types();
        var type = typeRules[data.objectType || defaultType];
        return (type === undefined ?
            [error(data.objectType)(path)] :
            type(data, path));
    });
};
