"use strict";
require("mocha");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (invalidData, message, test) {
    return it("should return an error when data is " + message, function () {
        return test(invalidData, false);
    });
};
