"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
exports.default = rulr_1.restrictToSchema({
    homePage: rulr_1.required(factory_1.iri),
    name: rulr_1.required(factory_1.stringValue),
});
