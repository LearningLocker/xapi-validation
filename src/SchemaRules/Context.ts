import { restrictToSchema, restrictToCollection, optional } from 'rulr';
import { activity,
  uuid,
  actor,
  group,
  string,
  language,
  statementRef,
  extensions,
} from '../Factory';

const contextActivities = restrictToSchema({
  parent: optional(restrictToCollection(() => activity)),
  category: optional(restrictToCollection(() => activity)),
  grouping: optional(restrictToCollection(() => activity)),
  other: optional(restrictToCollection(() => activity)),
});

export default restrictToSchema({
  registration: optional(uuid),
  instructor: optional(actor),
  team: optional(group),
  contextActivities: optional(contextActivities),
  revision: optional(string),
  platform: optional(string),
  language: optional(language),
  statement: optional(statementRef),
  extensions: optional(extensions),
})
