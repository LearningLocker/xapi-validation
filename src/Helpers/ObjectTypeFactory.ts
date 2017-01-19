import { first, checkType, warn, Rule } from 'rulr';

export type Types = {[key: string]: Rule};

export default (
  types: () => Types,
  defaultType: string,
  error = (data: any) => warn(`Invalid object type \`${data}\``)
) => first(checkType(Object), (data, path) => {
  const typeRules = types();
  const type = typeRules[data.objectType || defaultType];
  return (
    type === undefined ?
    [error(data.objectType)(path)] :
    type(data, path)
  );
});
