/* tslint:disable:max-line-length */
import { checkRegex, Rule } from 'rulr';
import { createTypeWarning } from '../warnings/TypeWarning';
import {
  escapedChar,
  optionalPattern,
  capturePattern,
  delimitedPattern,
  prefixedPattern,
} from '../helpers/regex';

const normChars = `w_~!$&'()*+,;=:-@`.split('').map(escapedChar).join('');
const otherChars = '\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uFFEF-\\uFFFD';
const allChars = `[${normChars}${otherChars}]`;
const allCharsWithDot = `(?:${allChars}|\\.)`;
const extChars = `(?:${allChars}|(?:\\%[a-f0-9][a-f0-9]))`;

const scheme = `(?:(\\w+):\\/\\/)`;
const authority = optionalPattern(capturePattern(delimitedPattern(`${extChars}+`, '.')));
const path = optionalPattern(prefixedPattern('/', `(?:${allCharsWithDot}+\\/?)*`));
const query = optionalPattern(prefixedPattern('?', `${extChars}*`));
const fragment = optionalPattern(prefixedPattern('#', `${extChars}*`));

const regex = new RegExp(`^${scheme}${authority}${path}${query}${fragment}$`, 'i');

const warningConstructor = createTypeWarning('Internationalized Resource Identifier (IRI)');

export default checkRegex(regex, warningConstructor) as Rule;
