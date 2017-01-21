"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = '4445904ac65039ef7a91506207f19162ac4dea73';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('test', 'not a Sha1', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
};
