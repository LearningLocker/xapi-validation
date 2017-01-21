"use strict";
require("mocha");
var describeOptionalProp_1 = require("./describeOptionalProp");
var itsInvalid_1 = require("./itsInvalid");
var collection_1 = require("./helpers/collection");
var factory_1 = require("./factory");
var interactionComponents = collection_1.default(factory_1.interactionComponent);
var allComponents = ['choices', 'scale', 'source', 'target', 'steps'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (validProps, type, test) {
    validProps.forEach(function (prop) {
        return describeOptionalProp_1.default(prop, interactionComponents, {
            interactionType: type
        }, test);
    });
    allComponents.filter(function (prop) {
        return !validProps.includes(prop);
    }).forEach(function (prop) {
        var data = (_a = {
                interactionType: type
            },
            _a[prop] = [],
            _a);
        var message = "containing unsupported component " + prop + " for " + type;
        itsInvalid_1.default(data, message, test);
        var _a;
    });
};
