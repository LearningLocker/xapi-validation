import Test from '../helpers/test';
import describeInteractionProp from '../describeInteractionProp';
import describeOptionalProp from '../describeOptionalProp';
import {
  languageMap,
  iri,
  extensions,
  interactionType,
  stringValue,
} from '../factory';
import itsInvalid from '../itsInvalid';

const validData = {};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);

  describeOptionalProp('name', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeOptionalProp('type', iri, validData, test);
  describeOptionalProp('moreInfo', iri, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
  describeOptionalProp('interactionType', interactionType, validData, test);
  describeOptionalProp('correctResponsesPattern', stringValue, validData, test);

  describeInteractionProp(['choices'], 'choice', test);
  describeInteractionProp(['choices'], 'sequencing', test);
  describeInteractionProp(['scale'], 'likert', test);
  describeInteractionProp(['source', 'target'], 'matching', test);
  describeInteractionProp(['steps'], 'performance', test);
};
