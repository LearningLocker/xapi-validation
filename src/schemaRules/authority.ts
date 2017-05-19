import { composeRules, Rule } from 'rulr';
import { actor } from '../factory';
import MembersTypeWarning from '../warnings/MembersTypeWarning';
import MembersLengthWarning from '../warnings/MembersLengthWarning';

export default composeRules([
  actor,
  (data, path) => {
    if (data == null || data.constructor !== Object) return [];
    if (data.objectType === 'Group') {
      const members = Array.isArray(data.member) ? data.member.length : 0;

      if (members !== 2) return [new MembersTypeWarning(data, path)];

      const invalidMembers = data.member.filter((member: any) =>
        member.objectType !== 'Agent' && member.objectType !== undefined
      );

      if (invalidMembers.length > 0) return [new MembersLengthWarning(data, path)];
    }
    return [];
  },
]) as Rule;
