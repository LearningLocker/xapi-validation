"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    homePage: rulr_1.required(Factory_1.iri),
    name: rulr_1.required(Factory_1.stringValue),
});
