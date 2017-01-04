import { composeRules, restrictToSchema } from 'rulr';
import agentSchema from '../Helpers/AgentSchema';
import getUsedIfis from '../Helpers/GetUsedIfis';
import { ifiCountError, noIfiError } from '../Errors';

export default composeRules([
  restrictToSchema(agentSchema),
  (data, path) => {
    const usedIfis = getUsedIfis(data);
    if (usedIfis.length > 1) return [ifiCountError(usedIfis, data)(path)];
    if (usedIfis.length === 0) return [noIfiError(data)(path)];
    return [];
  },
]);
