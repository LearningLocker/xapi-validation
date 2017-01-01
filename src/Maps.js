const { any, string, iri, language } = require('./Factory');

const map = (keyRule, valueRule) => (data, path) => {
  const keys = Object.keys(data);
  return keys.reduce((errors, key) =>
    errors.concat(keyRule(key, path)).concat(
      valueRule(data[key], path.concat(key))
    )
  , []);
};

exports.extensions = map(iri, any);
exports.languageMap = map(language, string);
