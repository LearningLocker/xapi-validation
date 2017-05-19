"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
exports.default = function (validData, test) {
    return it("should not return an error when data is valid", function () {
        return test(validData, true);
    });
};
