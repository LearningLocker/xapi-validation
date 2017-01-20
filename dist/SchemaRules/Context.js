"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
var contextActivities = rulr_1.restrictToSchema({
    parent: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.activity; })),
    category: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.activity; })),
    grouping: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.activity; })),
    other: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.activity; })),
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    registration: rulr_1.optional(Factory_1.uuid),
    instructor: rulr_1.optional(Factory_1.actor),
    team: rulr_1.optional(Factory_1.group),
    contextActivities: rulr_1.optional(contextActivities),
    revision: rulr_1.optional(Factory_1.stringValue),
    platform: rulr_1.optional(Factory_1.stringValue),
    language: rulr_1.optional(Factory_1.language),
    statement: rulr_1.optional(Factory_1.statementRef),
    extensions: rulr_1.optional(Factory_1.extensions),
});
