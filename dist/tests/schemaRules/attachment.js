"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    usageType: 'http://www.example.com',
    display: {},
    description: {},
    contentType: 'application/json',
    length: 10,
    sha2: 'test',
    fileUrl: 'http://www.example.com',
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeRequiredProp_1.default('usageType', factory_1.iri, validData, test);
    describeRequiredProp_1.default('display', factory_1.languageMap, validData, test);
    describeOptionalProp_1.default('description', factory_1.languageMap, validData, test);
    describeRequiredProp_1.default('contentType', factory_1.imt, validData, test);
    describeRequiredProp_1.default('length', factory_1.integerValue, validData, test);
    describeRequiredProp_1.default('sha2', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('fileUrl', factory_1.iri, validData, test);
};
