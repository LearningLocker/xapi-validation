"use strict";
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Collection_1 = require("../Helpers/Collection");
var Factory_1 = require("../Factory");
var validData = {
    parent: [],
    category: [],
    grouping: [],
    other: [],
};
var activities = Collection_1.default(Factory_1.activity);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeOptionalProp_1.default('parent', activities, validData, test);
    DescribeOptionalProp_1.default('category', activities, validData, test);
    DescribeOptionalProp_1.default('grouping', activities, validData, test);
    DescribeOptionalProp_1.default('other', activities, validData, test);
};
