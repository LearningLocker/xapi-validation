"use strict";
var rulr_1 = require("rulr");
var Errors_1 = require("../Errors");
var Factory_1 = require("../Factory");
var getSupportedComponents = function (interactionType) {
    switch (interactionType) {
        case 'choice':
        case 'sequencing':
            return ['choices'];
        case 'likert':
            return ['scale'];
        case 'matching':
            return ['source', 'target'];
        case 'performance':
            return ['steps'];
        case 'true-false':
        case 'fill-in':
        case 'long-fill-in':
        case 'numeric':
        case 'other':
        default:
            return [];
    }
};
var getUnsupportedComponents = function (interactionType) {
    var allComponents = ['choices', 'scale', 'source', 'target', 'steps'];
    var supportedComponents = getSupportedComponents(interactionType);
    return allComponents.filter(function (component) { return !supportedComponents.includes(component); });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema({
        name: rulr_1.optional(Factory_1.languageMap),
        description: rulr_1.optional(Factory_1.languageMap),
        type: rulr_1.optional(Factory_1.iri),
        moreInfo: rulr_1.optional(Factory_1.iri),
        extensions: rulr_1.optional(Factory_1.extensions),
        interactionType: rulr_1.optional(Factory_1.interactionType),
        correctResponsePattern: rulr_1.optional(Factory_1.string),
        choices: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.interactionComponent; })),
        scale: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.interactionComponent; })),
        source: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.interactionComponent; })),
        target: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.interactionComponent; })),
        steps: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.interactionComponent; })),
    }),
    function (data, path) {
        if (data == null || data.constructor !== Object)
            return [];
        var interactionType = data.interactionType;
        var unsupportedComponents = getUnsupportedComponents(interactionType);
        var invalidComponents = unsupportedComponents.filter(function (component) { return data[component] !== undefined; });
        if (invalidComponents.length > 0)
            return [
                Errors_1.invalidComponentsError(invalidComponents, data)(path)
            ];
        return [];
    },
]);
