"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var factory_1 = require("../factory");
var validData = {
    homePage: 'http://www.example.com',
    name: '123',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeRequiredProp_1.default('homePage', factory_1.iri, validData, test);
    describeRequiredProp_1.default('name', factory_1.stringValue, validData, test);
};
