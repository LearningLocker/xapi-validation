"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var ItsInvalid_1 = require("../ItsInvalid");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var Factory_1 = require("../Factory");
var validData = {
    actor: {
        objectType: 'Agent',
        mbox: 'mailto:test@example.com',
    },
    verb: {
        id: 'http://www.example.com',
    },
    object: {
        objectType: 'Activity',
        id: 'http://www.example.com',
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default(Object.assign({}, validData, {
        object: {
            objectType: 'SubStatement',
            actor: {
                objectType: 'Agent',
                mbox: 'mailto:test@example.com',
            },
            verb: {
                id: 'http://www.example.com',
            },
            object: {
                objectType: 'Activity',
                id: 'http://www.example.com',
            },
        },
    }), 'object is a SubStatement', test);
    DescribeRequiredProp_1.default('object', Factory_1.subStatementObject, validData, test);
    StatementSchema_1.default(function (data, valid) {
        return test(Object.assign({}, validData, data), valid);
    });
};
