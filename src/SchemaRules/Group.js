const {
  composeRules,
  restrictToSchema,
  restrictToCollection,
  optional,
} = require('rulr');
const agentSchema = require('../Helpers/AgentSchema');
const getUsedIfis = require('../Helpers/GetUsedIfis');
const { actor } = require('../Factory');
const { ifiCountError, noMembersError } = require('../Errors');

module.exports = composeRules([
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
    if (usedIfis.length > 1) return ifiCountError(usedIfis)(path);
    const hasNoMembers = usedIfis.length === 0 && !usedMember;
    return hasNoMembers ? [noMembersError(data)(path)] : [];
  },
]);
