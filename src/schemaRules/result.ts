import { restrictToSchema, optional, Rule } from 'rulr';
import {
  scaledValue,
  numberValue,
  booleanValue,
  stringValue,
  duration,
  extensions,
} from '../factory';

const score = restrictToSchema({
  scaled: optional(scaledValue),
  raw: optional(numberValue),
  min: optional(numberValue),
  max: optional(numberValue),
});

export default restrictToSchema({
  score: optional(score),
  success: optional(booleanValue),
  completion: optional(booleanValue),
  response: optional(stringValue),
  duration: optional(duration),
  extensions: optional(extensions),
}) as Rule;
