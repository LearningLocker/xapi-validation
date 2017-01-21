"use strict";
var describeOptionalProp_1 = require("../describeOptionalProp");
var collection_1 = require("../helpers/collection");
var factory_1 = require("../factory");
var validData = {
    parent: [],
    category: [],
    grouping: [],
    other: [],
};
var activities = collection_1.default(factory_1.activity);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeOptionalProp_1.default('parent', activities, validData, test);
    describeOptionalProp_1.default('category', activities, validData, test);
    describeOptionalProp_1.default('grouping', activities, validData, test);
    describeOptionalProp_1.default('other', activities, validData, test);
};
