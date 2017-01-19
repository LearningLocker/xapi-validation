import 'mocha';
import Test from './Helpers/Test';
import describeOptionalProp from './DescribeOptionalProp';
import itsInvalid from './ItsInvalid';
import collection from './Helpers/Collection';
import { interactionComponent } from './Factory';

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
