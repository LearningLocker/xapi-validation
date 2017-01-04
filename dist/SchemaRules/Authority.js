"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
var Errors_1 = require("../Errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    Factory_1.actor,
    function (data, path) {
        if (data == null || data.constructor !== Object)
            return [];
        if (data.objectType === 'Group') {
            var members = Array.isArray(data.member) ? data.member.length : 0;
            if (members !== 2)
                return [Errors_1.membersTypeError(data)(path)];
            var invalidMembers = data.member.filter(function (member) {
                return member.objectType !== "Agent" && member.objectType !== undefined;
            });
            if (invalidMembers.length > 0)
                return [Errors_1.membersLengthError(data)(path)];
        }
        return [];
    },
]);
