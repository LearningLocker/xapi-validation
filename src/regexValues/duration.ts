/* tslint:disable:max-line-length */
import { checkRegex, Rule } from 'rulr';
import { createTypeWarning } from '../warnings/TypeWarning';

export default checkRegex(
  /^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/
, createTypeWarning('ISO Duration')) as Rule;
