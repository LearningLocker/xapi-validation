"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = '4445904ac65039ef7a91506207f19162ac4dea73';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default('test', 'not a Sha1', test);
    ItsInvalid_1.default(10, 'not a String', test);
    ItsValid_1.default(validData, test);
};
