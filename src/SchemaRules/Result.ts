import { restrictToSchema, optional } from 'rulr';
import {
  scaled,
  number,
  boolean,
  string,
  duration,
  extensions,
} from '../Factory';

const score = restrictToSchema({
  scaled: optional(scaled),
  raw: optional(number),
  min: optional(number),
  max: optional(number),
});

export default restrictToSchema({
  score: optional(score),
  success: optional(boolean),
  completion: optional(boolean),
  response: optional(string),
  duration: optional(duration),
  extensions: optional(extensions),
});
