"use strict";
var rulr_1 = require("rulr");
var AgentSchema_1 = require("../Helpers/AgentSchema");
var GetUsedIfis_1 = require("../Helpers/GetUsedIfis");
var Factory_1 = require("../Factory");
var Errors_1 = require("../Errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, AgentSchema_1.default, {
        member: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.actor; }))
    })),
    function (data, path) {
        var usedIfis = GetUsedIfis_1.default(data);
        var usedMember = (data.member != null &&
            Array.isArray(data.member) &&
            data.member.length > 0);
        if (usedIfis.length > 1)
            return [Errors_1.ifiCountError(usedIfis, data)(path)];
        var hasNoMembers = usedIfis.length === 0 && !usedMember;
        return hasNoMembers ? [Errors_1.noMembersError(data)(path)] : [];
    },
]);
