import {
  composeRules,
  restrictToSchema,
  restrictToCollection,
  optional,
  Rule,
} from 'rulr';
import { isPlainObject } from 'lodash';
import agentSchema from '../helpers/agentSchema';
import getUsedIfis from '../helpers/getUsedIfis';
import restrictToValue from '../helpers/restrictToValue';
import { actor } from '../factory';
import IfiCountWarning from '../warnings/IfiCountWarning';
import NoMembersWarning from '../warnings/NoMembersWarning';

export default composeRules([
  restrictToSchema(Object.assign({}, agentSchema, {
    objectType: optional(restrictToValue('Group')),
    member: optional(restrictToCollection(() => actor)),
  })),
  (data, path) => {
    if (!isPlainObject(data)) return [];
    const usedIfis = getUsedIfis(data);
    const usedMember = (
      data.member != null &&
      Array.isArray(data.member) &&
      data.member.length > 0
    );
    if (usedIfis.length > 1) return [new IfiCountWarning(data, path, usedIfis)];
    const hasNoMembers = usedIfis.length === 0 && !usedMember;
    return hasNoMembers ? [new NoMembersWarning(data, path)] : [];
  },
]) as Rule;
