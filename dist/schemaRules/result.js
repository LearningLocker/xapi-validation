"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
var RawLessThanMinWarning_1 = require("../warnings/RawLessThanMinWarning");
var RawMoreThanMaxWarning_1 = require("../warnings/RawMoreThanMaxWarning");
var MinMoreThanMaxWarning_1 = require("../warnings/MinMoreThanMaxWarning");
var checkRawMoreThanMin = function (data, path) {
    if (data.raw !== undefined && data.min !== undefined && data.raw < data.min) {
        return [new RawLessThanMinWarning_1.default(data, path, data.raw, data.min)];
    }
    return [];
};
var checkRawLessThanMax = function (data, path) {
    if (data.raw !== undefined && data.max !== undefined && data.raw > data.max) {
        return [new RawMoreThanMaxWarning_1.default(data, path, data.raw, data.max)];
    }
    return [];
};
var checkMinLessThanMax = function (data, path) {
    if (data.min !== undefined && data.max !== undefined && data.min > data.max) {
        return [new MinMoreThanMaxWarning_1.default(data, path, data.min, data.max)];
    }
    return [];
};
var score = rulr_1.composeRules([
    rulr_1.restrictToSchema({
        scaled: rulr_1.optional(factory_1.scaledValue),
        raw: rulr_1.optional(factory_1.numberValue),
        min: rulr_1.optional(factory_1.numberValue),
        max: rulr_1.optional(factory_1.numberValue),
    }),
    checkRawMoreThanMin,
    checkRawLessThanMax,
    checkMinLessThanMax,
]);
exports.default = rulr_1.restrictToSchema({
    score: rulr_1.optional(score),
    success: rulr_1.optional(factory_1.booleanValue),
    completion: rulr_1.optional(factory_1.booleanValue),
    response: rulr_1.optional(factory_1.stringValue),
    duration: rulr_1.optional(factory_1.duration),
    extensions: rulr_1.optional(factory_1.extensions),
});
