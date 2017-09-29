import { composeRules, Rule, optional, restrictToSchema, restrictToCollection } from 'rulr';
import { actor } from '../factory';
import MembersTypeWarning from '../warnings/MembersTypeWarning';
import MembersLengthWarning from '../warnings/MembersLengthWarning';
import restrictToValue from '../helpers/restrictToValue';
import { isPlainObject } from 'lodash';

export default composeRules([
  restrictToSchema({
    objectType: optional(restrictToValue('Group')),
    member: optional(restrictToCollection(() => actor))
  }),
  (data, path) => {
    if (!isPlainObject(data)) return [];
    const members = Array.isArray(data.member) ? data.member.length : 0;

    if (members !== 2) return [new MembersTypeWarning(data, path)];

    const invalidMembers = data.member.filter((member: any) =>
      member.objectType !== 'Agent' && member.objectType !== undefined
    );

    if (invalidMembers.length > 0) return [new MembersLengthWarning(data, path)];
    return [];
  }
]) as Rule;
