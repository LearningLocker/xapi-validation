"use strict";
var assert_1 = require("assert");
var index_1 = require("./index");
var Factory_1 = require("./Tests/Factory");
var assertArray = function (value, message) {
    return assert_1.default.equal(Array.isArray(value), true, message);
};
Factory_1.statement(function (statement, valid) {
    var warnings = index_1.default(statement, []);
    assertArray(warnings, 'result of validation is not an array');
    if (valid === true) {
        assert_1.default.deepEqual(warnings, [], 'warnings were returned');
    }
    else {
        assert_1.default.equal(warnings.length === 0, false, 'no warnings were returned');
    }
});
