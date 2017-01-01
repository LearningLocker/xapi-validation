const { first, checkType, warn } = require('rulr');

module.exports = (
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
