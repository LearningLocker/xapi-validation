import { first, checkType, warn } from 'rulr';

export default (
  types, defaultType, error = data => warn(`Invalid object type \`${data}\``)
) => first(checkType(Object), (data, path) => {
  const typeRules = types();
  const type = typeRules[data.objectType || defaultType];
  return (
    type === undefined ?
    [error(data.objectType)(path)] :
    type(data, path)
  );
});
