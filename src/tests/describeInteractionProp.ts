import 'mocha';
import Test from './helpers/test';
import describeOptionalProp from './describeOptionalProp';
import itsInvalid from './itsInvalid';
import collection from './helpers/collection';
import { interactionComponent } from './factory';

const interactionComponents = collection(interactionComponent);
const allComponents = ['choices', 'scale', 'source', 'target', 'steps'];

export default (validProps: string[], type: string, test: Test) => {
  validProps.forEach(prop =>
    describeOptionalProp(prop, interactionComponents, {
      interactionType: type
    }, test)
  );
  allComponents.filter(prop =>
    !validProps.includes(prop)
  ).forEach(prop =>
    itsInvalid({
      interactionType: type,
      [prop]: [],
    }, `containing unsupported component ${prop} for ${type}`, test)
  );
};
