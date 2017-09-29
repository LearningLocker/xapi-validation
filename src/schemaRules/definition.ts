import {
  restrictToSchema, restrictToCollection, composeRules, optional, Rule, Warning
} from 'rulr';
import { isPlainObject } from 'lodash';
import InvalidComponentsWarning from '../warnings/InvalidComponentsWarning';
import MissingInteractionTypeWarning from '../warnings/MissingInteractionTypeWarning';
import {
  languageMap,
  iri,
  extensions,
  interactionType,
  stringValue,
  interactionComponent,
} from '../factory';

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
    correctResponsesPattern: optional(restrictToCollection(() => stringValue)),
    choices: optional(restrictToCollection(() => interactionComponent)),
    scale: optional(restrictToCollection(() => interactionComponent)),
    source: optional(restrictToCollection(() => interactionComponent)),
    target: optional(restrictToCollection(() => interactionComponent)),
    steps: optional(restrictToCollection(() => interactionComponent)),
  }),
  (data, path): Warning[] => {
    if (!isPlainObject(data)) return [];
    const interactionType = data.interactionType;
    const unsupportedComponents = getUnsupportedComponents(interactionType);
    const invalidComponents = unsupportedComponents.filter(
      component => data[component] !== undefined
    );
    if (invalidComponents.length > 0) return [
      new InvalidComponentsWarning(data, path, invalidComponents)
    ];
    return [];
  },
  (data, path): Warning[] => {
    if (!isPlainObject(data)) return [];
    const missingInteractionType = (
      data.correctResponsesPattern !== undefined &&
      data.interactionType === undefined
    );
    if (missingInteractionType) {
      return [
        new MissingInteractionTypeWarning(data, path)
      ];
    }
    return [];
  }
]) as Rule;
