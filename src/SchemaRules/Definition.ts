import {
  restrictToSchema, restrictToCollection, composeRules, optional, required
} from 'rulr';
import { invalidComponentsError } from '../Errors';
import {
  languageMap,
  iri,
  extensions,
  interactionType,
  string,
  interactionComponent,
} from '../Factory';

const getSupportedComponents = (interactionType: string): string[] => {
  switch (interactionType) {
    case 'choice':
    case 'sequencing':
      return ['choices'];
    case 'likert':
      return ['scale'];
    case 'matching':
      return ['source', 'target'];
    case 'performance':
      return ['steps'];
    case 'true-false':
    case 'fill-in':
    case 'long-fill-in':
    case 'numeric':
    case 'other':
    default:
      return [];
  }
};
const getUnsupportedComponents = (interactionType: string): string[] => {
  const allComponents = ['choices', 'scale', 'source', 'target', 'steps'];
  const supportedComponents = getSupportedComponents(interactionType);
  return allComponents.filter(
    component => !supportedComponents.includes(component)
  );
};

export default composeRules([
  restrictToSchema({
    name: optional(languageMap),
    description: optional(languageMap),
    type: optional(iri),
    moreInfo: optional(iri),
    extensions: optional(extensions),
    interactionType: optional(interactionType),
    correctResponsePattern: optional(string),
    choices: optional(restrictToCollection(() => interactionComponent)),
    scale: optional(restrictToCollection(() => interactionComponent)),
    source: optional(restrictToCollection(() => interactionComponent)),
    target: optional(restrictToCollection(() => interactionComponent)),
    steps: optional(restrictToCollection(() => interactionComponent)),
  }),
  (data, path) => {
    if (data == null || data.constructor !== Object) return [];
    const interactionType = data.interactionType;
    const unsupportedComponents = getUnsupportedComponents(interactionType);
    const invalidComponents = unsupportedComponents.filter(
      component => data[component] !== undefined
    );
    if (invalidComponents.length > 0) return [
      invalidComponentsError(invalidComponents, data)(path)
    ];
    return [];
  },
]);
