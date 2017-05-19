"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeRequiredProp_1 = require("../describeRequiredProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    homePage: 'http://www.example.com',
    name: '123',
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeRequiredProp_1.default('homePage', factory_1.iri, validData, test);
    describeRequiredProp_1.default('name', factory_1.stringValue, validData, test);
};
