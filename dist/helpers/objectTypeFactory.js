"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var ObjectTypeWarning_1 = require("../warnings/ObjectTypeWarning");
exports.default = function (types, defaultType) { return rulr_1.first(rulr_1.checkType(Object), function (data, path) {
    var typeRules = types();
    var type = typeRules[data.objectType || defaultType];
    return (type === undefined ?
        [new ObjectTypeWarning_1.default(data.objectType, path)] :
        type(data, path));
}); };
