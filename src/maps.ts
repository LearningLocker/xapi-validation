import { Rule, Warning, first, checkType } from 'rulr';
import { anyValue, stringValue, iri, language } from './factory';

const map = (keyRule: Rule, valueRule: Rule): Rule =>
  first(checkType(Object), (data, path) => {
    const keys = Object.keys(data);
    return keys.reduce((warnings: Warning[], key: string) =>
      warnings.concat(keyRule(key, path)).concat(
        valueRule(data[key], path.concat(key))
      )
    , []);
  });

export const extensions = map(iri, anyValue);
export const languageMap = map(language, stringValue);
