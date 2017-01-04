"use strict";
var DescribeOptionalProp_1 = require("./DescribeOptionalProp");
var ItsInvalid_1 = require("./ItsInvalid");
var Collection_1 = require("./Helpers/Collection");
var Factory_1 = require("./Factory");
var interactionComponents = Collection_1.default(Factory_1.interactionComponent);
var allComponents = ["choices", "scale", "source", "target", "steps"];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (validProps, type, test) {
    validProps.forEach(function (prop) {
        return DescribeOptionalProp_1.default(prop, interactionComponents, {
            interactionType: type
        }, test);
    });
    allComponents.filter(function (prop) {
        return !validProps.includes(prop);
    }).forEach(function (prop) {
        return ItsInvalid_1.default((_a = {
                interactionType: type
            },
            _a[prop] = [],
            _a), "containing unsupported component " + prop + " for " + type, test);
        var _a;
    });
};
