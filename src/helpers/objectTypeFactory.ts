import { first, checkType, Rule } from 'rulr';
import ObjectTypeWarning from '../warnings/ObjectTypeWarning';

export type Types = {[key: string]: Rule};

export default (
  types: () => Types,
  defaultType: string
) => first(checkType(Object), (data, path) => {
  const typeRules = types();
  const type = typeRules[data.objectType || defaultType];
  return (
    type === undefined ?
    [new ObjectTypeWarning(data.objectType, path)] :
    type(data, path)
  );
});
