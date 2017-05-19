"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
exports.default = function (invalidData, message, test) {
    return it("should return an error when data is " + message, function () {
        return test(invalidData, false);
    });
};
