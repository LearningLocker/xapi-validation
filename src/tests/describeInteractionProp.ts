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
  ).forEach(prop => {
    const data = {
      interactionType: type,
      [prop]: [],
    };
    const message = `containing unsupported component ${prop} for ${type}`;
    itsInvalid(data, message, test);
  });
};
