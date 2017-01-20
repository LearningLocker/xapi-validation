import {
  composeRules,
  restrictToSchema,
  restrictToCollection,
  optional,
} from 'rulr';
import agentSchema from '../Helpers/AgentSchema';
import getUsedIfis from '../Helpers/GetUsedIfis';
import { actor } from '../Factory';
import { ifiCountError, noMembersError } from '../Errors';

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
    if (usedIfis.length > 1) return [ifiCountError(usedIfis, data)(path)];
    const hasNoMembers = usedIfis.length === 0 && !usedMember;
    return hasNoMembers ? [noMembersError(data)(path)] : [];
  },
]);
