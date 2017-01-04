import { any, string, iri, language } from './Factory';

const map = (keyRule, valueRule) => (data, path) => {
  const keys = Object.keys(data);
  return keys.reduce((errors, key) =>
    errors.concat(keyRule(key, path)).concat(
      valueRule(data[key], path.concat(key))
    )
  , []);
};

export const extensions = map(iri, any);
export const languageMap = map(language, string);
