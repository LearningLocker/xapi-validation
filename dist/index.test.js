"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("./index");
var factory_1 = require("./tests/factory");
var assertArray = function (value, message) {
    return assert.equal(Array.isArray(value), true, message);
};
var encodeData = function (data) {
    return JSON.stringify(data, null, 2);
};
factory_1.statement(function (data, valid) {
    var warnings = index_1.default(data);
    var encodedData = encodeData(data);
    assertArray(warnings, "result of validation is not an array " + encodeData);
    if (valid === true) {
        var encodedWarnings = encodeData(data);
        assert.deepEqual(warnings, [], "warnings were returned\n" + encodedData + "\n" + encodedWarnings);
    }
    else {
        assert.equal(warnings.length === 0, false, "no warnings were returned\n" + encodedData);
    }
});
