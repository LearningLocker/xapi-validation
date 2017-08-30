"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
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
    itsInvalid_1.default(__assign({}, validData, { usageType: 'http://adlnet.gov/expapi/attachments/signature', contentType: 'application/json' }), 'not a valid signed content type', test);
    itsValid_1.default(__assign({}, validData, { usageType: 'http://adlnet.gov/expapi/attachments/signature', contentType: 'application/octet-stream' }), test);
    describeRequiredProp_1.default('usageType', factory_1.iri, validData, test);
    describeRequiredProp_1.default('display', factory_1.languageMap, validData, test);
    describeOptionalProp_1.default('description', factory_1.languageMap, validData, test);
    describeRequiredProp_1.default('contentType', factory_1.imt, validData, test);
    describeRequiredProp_1.default('length', factory_1.integerValue, validData, test);
    describeRequiredProp_1.default('sha2', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('fileUrl', factory_1.iri, validData, test);
};
