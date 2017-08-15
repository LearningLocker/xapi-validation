"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var InvalidComponentsWarning_1 = require("../warnings/InvalidComponentsWarning");
var factory_1 = require("../factory");
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
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema({
        name: rulr_1.optional(factory_1.languageMap),
        description: rulr_1.optional(factory_1.languageMap),
        type: rulr_1.optional(factory_1.iri),
        moreInfo: rulr_1.optional(factory_1.iri),
        extensions: rulr_1.optional(factory_1.extensions),
        interactionType: rulr_1.optional(factory_1.interactionType),
        correctResponsesPattern: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.stringValue; })),
        choices: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.interactionComponent; })),
        scale: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.interactionComponent; })),
        source: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.interactionComponent; })),
        target: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.interactionComponent; })),
        steps: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.interactionComponent; })),
    }),
    function (data, path) {
        if (data == null || data.constructor !== Object)
            return [];
        var interactionType = data.interactionType;
        var unsupportedComponents = getUnsupportedComponents(interactionType);
        var invalidComponents = unsupportedComponents.filter(function (component) { return data[component] !== undefined; });
        if (invalidComponents.length > 0)
            return [
                new InvalidComponentsWarning_1.default(data, path, invalidComponents)
            ];
        return [];
    },
]);
