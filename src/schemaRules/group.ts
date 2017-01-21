import {
  composeRules,
  restrictToSchema,
  restrictToCollection,
  optional,
} from 'rulr';
import agentSchema from '../helpers/agentSchema';
import getUsedIfis from '../helpers/getUsedIfis';
import { actor } from '../factory';
import { ifiCountError, noMembersError } from '../errors';

export default composeRules([
  restrictToSchema(Object.assign({}, agentSchema, {
    member: optional(restrictToCollection(() => actor))
  })),
  (data, path) => {
    const usedIfis = getUsedIfis(data);
    const usedMember = (
      data.member != null &&
      Array.isArray(data.member) &&
      data.member.length > 0
    );
    if (usedIfis.length > 1) return [ifiCountError(usedIfis)(path)];
    const hasNoMembers = usedIfis.length === 0 && !usedMember;
    return hasNoMembers ? [noMembersError()(path)] : [];
  },
]);
