import { Rule, Warning } from 'rulr';
import { any, string, iri, language } from './Factory';

const map = (keyRule: Rule, valueRule: Rule): Rule => (data, path) => {
  const keys = Object.keys(data);
  return keys.reduce((warnings: Warning[], key: string) =>
    warnings.concat(keyRule(key, path)).concat(
      valueRule(data[key], path.concat(key))
    )
  , []);
};

export const extensions = map(iri, any);
export const languageMap = map(language, string);
