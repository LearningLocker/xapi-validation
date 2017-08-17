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
import collection from '../helpers/collection';

const validData = {};
const correctResponsesPattern = collection(stringValue);

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
    correctResponsesPattern: [
      'Bob\'s your uncle'
    ]
  }, 'Missing interactionType', test);

  describeOptionalProp('name', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeOptionalProp('type', iri, validData, test);
  describeOptionalProp('moreInfo', iri, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
  describeOptionalProp('interactionType', interactionType, validData, test);
  describeOptionalProp('correctResponsesPattern', correctResponsesPattern, {
    ...validData,
    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
    interactionType: 'fill-in'
  }, test);

  describeInteractionProp(['choices'], 'choice', test);
  describeInteractionProp(['choices'], 'sequencing', test);
  describeInteractionProp(['scale'], 'likert', test);
  describeInteractionProp(['source', 'target'], 'matching', test);
  describeInteractionProp(['steps'], 'performance', test);
};
