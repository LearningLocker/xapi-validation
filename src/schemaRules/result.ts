import { restrictToSchema, optional, Rule, composeRules, Warning } from 'rulr';
import {
  scaledValue,
  numberValue,
  booleanValue,
  stringValue,
  duration,
  extensions,
} from '../factory';
import { isPlainObject } from 'lodash';
import RawLessThanMinWarning from '../warnings/RawLessThanMinWarning';
import RawMoreThanMaxWarning from '../warnings/RawMoreThanMaxWarning';
import MinMoreThanMaxWarning from '../warnings/MinMoreThanMaxWarning';

const checkRawMoreThanMin = (data: any, path: string[]): Warning[] => {
  if (!isPlainObject(data)) return [];
  if (data.raw !== undefined && data.min !== undefined && data.raw < data.min) {
    return [new RawLessThanMinWarning(data, path, data.raw, data.min)];
  }
  return [];
};

const checkRawLessThanMax = (data: any, path: string[]): Warning[] => {
  if (!isPlainObject(data)) return [];
  if (data.raw !== undefined && data.max !== undefined && data.raw > data.max) {
    return [new RawMoreThanMaxWarning(data, path, data.raw, data.max)];
  }
  return [];
};

const checkMinLessThanMax = (data: any, path: string[]): Warning[] => {
  if (!isPlainObject(data)) return [];
  if (data.min !== undefined && data.max !== undefined && data.min > data.max) {
    return [new MinMoreThanMaxWarning(data, path, data.min, data.max)];
  }
  return [];
};

const score = composeRules([
  restrictToSchema({
    scaled: optional(scaledValue),
    raw: optional(numberValue),
    min: optional(numberValue),
    max: optional(numberValue),
  }),
  checkRawMoreThanMin,
  checkRawLessThanMax,
  checkMinLessThanMax,
]);

export default restrictToSchema({
  score: optional(score),
  success: optional(booleanValue),
  completion: optional(booleanValue),
  response: optional(stringValue),
  duration: optional(duration),
  extensions: optional(extensions),
}) as Rule;
