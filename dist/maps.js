"use strict";
var factory_1 = require("./factory");
var map = function (keyRule, valueRule) { return function (data, path) {
    var keys = Object.keys(data);
    return keys.reduce(function (warnings, key) {
        return warnings.concat(keyRule(key, path)).concat(valueRule(data[key], path.concat(key)));
    }, []);
}; };
exports.extensions = map(factory_1.iri, factory_1.anyValue);
exports.languageMap = map(factory_1.language, factory_1.stringValue);
