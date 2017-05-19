"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
var MembersTypeWarning_1 = require("../warnings/MembersTypeWarning");
var MembersLengthWarning_1 = require("../warnings/MembersLengthWarning");
exports.default = rulr_1.composeRules([
    factory_1.actor,
    function (data, path) {
        if (data == null || data.constructor !== Object)
            return [];
        if (data.objectType === 'Group') {
            var members = Array.isArray(data.member) ? data.member.length : 0;
            if (members !== 2)
                return [new MembersTypeWarning_1.default(data, path)];
            var invalidMembers = data.member.filter(function (member) {
                return member.objectType !== 'Agent' && member.objectType !== undefined;
            });
            if (invalidMembers.length > 0)
                return [new MembersLengthWarning_1.default(data, path)];
        }
        return [];
    },
]);
