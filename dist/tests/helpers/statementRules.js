"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statementRef = {
    objectType: 'StatementRef',
    id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};
var activity = {
    objectType: 'Activity',
    id: 'http://www.example.com',
};
var platform = 'Test';
var revision = 'Test';
var verb = {
    id: 'http://adlnet.gov/expapi/verbs/voided',
};
exports.default = function (test) {
    it('should return an error when platform is set incorrectly', function () {
        return test({
            object: statementRef,
            context: { platform: platform },
        }, false);
    });
    it('should return an error when revision is set incorrectly', function () {
        return test({
            object: statementRef,
            context: { revision: revision },
        }, false);
    });
    it('should not return an error when context is used correctly', function () {
        return test({
            object: activity,
            context: { platform: platform, revision: revision },
        }, true);
    });
    it('should return an error when void is used incorrectly', function () {
        return test({
            object: activity,
            verb: verb,
        }, false);
    });
    it('should not return an error when void is used correctly', function () {
        return test({
            object: statementRef,
            verb: verb,
        }, true);
    });
};
