"use strict";
var Factory_1 = require("./Factory");
var map = function (keyRule, valueRule) { return function (data, path) {
    var keys = Object.keys(data);
    return keys.reduce(function (warnings, key) {
        return warnings.concat(keyRule(key, path)).concat(valueRule(data[key], path.concat(key)));
    }, []);
}; };
exports.extensions = map(Factory_1.iri, Factory_1.anyValue);
exports.languageMap = map(Factory_1.language, Factory_1.stringValue);
