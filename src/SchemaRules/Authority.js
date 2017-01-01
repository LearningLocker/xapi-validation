const { composeRules } = require('rulr');
const { actor } = require('../Factory');
const { membersTypeError, membersLengthError } = require('../Errors');

module.exports = composeRules([
  actor,
  (data, path) => {
    if (data == null || data.constructor !== Object) return [];
    if (data.objectType === 'Group') {
      const members = Array.isArray(data.member) ? data.member.length : 0;

      if (members !== 2) return [membersTypeError(data)(path)];

      const invalidMembers = data.member.filter(member =>
        member.objectType !== "Agent" && member.objectType !== undefined
      );

      if (invalidMembers.length > 0) return [membersLengthError(data)(path)];
    }
    return [];
  },
]);
