import { composeRules, restrictToSchema, Rule } from 'rulr';
import agentSchema from '../helpers/agentSchema';
import getUsedIfis from '../helpers/getUsedIfis';
import { isPlainObject } from 'lodash';

import IfiCountWarning from '../warnings/IfiCountWarning';
import NoIfiWarning from '../warnings/NoIfiWarning';

export default composeRules([
  restrictToSchema(agentSchema),
  (data, path) => {
    if (!isPlainObject(data)) return [];
    const usedIfis = getUsedIfis(data);
    if (usedIfis.length > 1) return [new IfiCountWarning(data, path, usedIfis)];
    if (usedIfis.length === 0) return [new NoIfiWarning(data, path)];
    return [];
  },
]) as Rule;
