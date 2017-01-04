import describeOptionalProp from './DescribeOptionalProp';
import itsInvalid from './ItsInvalid';
import collection from './Helpers/Collection';
import { interactionComponent } from './Factory';

const interactionComponents = collection(interactionComponent);
const allComponents = ["choices", "scale", "source", "target", "steps"];

export default (validProps, type, test) => {
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
