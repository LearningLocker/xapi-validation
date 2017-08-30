"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var ContextPropWarning_1 = require("../warnings/ContextPropWarning");
var VoidWarning_1 = require("../warnings/VoidWarning");
var lodash_1 = require("lodash");
exports.default = rulr_1.composeRules([
    function (data, path) {
        var objectIsActivity = (lodash_1.isObject(data.object) &&
            (data.object.objectType === 'Activity' || data.object.objectType === undefined));
        var hasInvalidProps = (lodash_1.isObject(data.context) &&
            (data.context.platform !== undefined || data.context.revision !== undefined));
        var invalidContext = !objectIsActivity && hasInvalidProps;
        return invalidContext ? [new ContextPropWarning_1.default(data, path)] : [];
    },
    function (data, path) {
        var voidVerbId = 'http://adlnet.gov/expapi/verbs/voided';
        var objectIsStatementRef = (data.object && data.object.objectType === 'StatementRef');
        var verbIsVoid = data.verb && data.verb.id === voidVerbId;
        var hasVoidError = verbIsVoid && !objectIsStatementRef;
        return hasVoidError ? [new VoidWarning_1.default(data, path, voidVerbId)] : [];
    },
]);
