"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var factory_1 = require("../factory");
var validData = {
    objectType: 'Activity',
    id: 'http://www.example.com',
    definition: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeRequiredProp_1.default('id', factory_1.iri, validData, test);
    describeOptionalProp_1.default('definition', factory_1.definition, validData, test);
};
