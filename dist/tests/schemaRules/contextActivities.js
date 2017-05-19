"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var collection_1 = require("../helpers/collection");
var factory_1 = require("../factory");
var validData = {
    parent: [],
    category: [],
    grouping: [],
    other: [],
};
var activities = collection_1.default(factory_1.activity);
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeOptionalProp_1.default('parent', activities, validData, test);
    describeOptionalProp_1.default('category', activities, validData, test);
    describeOptionalProp_1.default('grouping', activities, validData, test);
    describeOptionalProp_1.default('other', activities, validData, test);
};
