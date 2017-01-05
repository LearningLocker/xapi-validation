import { composeRules } from 'rulr';
import { actor } from '../Factory';
import { membersTypeError, membersLengthError } from '../Errors';

export default composeRules([
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