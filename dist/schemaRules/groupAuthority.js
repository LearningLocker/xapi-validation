"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
var MembersTypeWarning_1 = require("../warnings/MembersTypeWarning");
var MembersLengthWarning_1 = require("../warnings/MembersLengthWarning");
var restrictToValue_1 = require("../helpers/restrictToValue");
var lodash_1 = require("lodash");
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema({
        objectType: rulr_1.optional(restrictToValue_1.default('Group')),
        member: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.actor; }))
    }),
    function (data, path) {
        if (!lodash_1.isObject(data))
            return [];
        var members = Array.isArray(data.member) ? data.member.length : 0;
        if (members !== 2)
            return [new MembersTypeWarning_1.default(data, path)];
        var invalidMembers = data.member.filter(function (member) {
            return member.objectType !== 'Agent' && member.objectType !== undefined;
        });
        if (invalidMembers.length > 0)
            return [new MembersLengthWarning_1.default(data, path)];
        return [];
    }
]);
