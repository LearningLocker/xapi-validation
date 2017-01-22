/* tslint:disable:max-line-length */
import { checkRegex, checkTypeWarning } from 'rulr';

export default checkRegex(
  /^P((\d+([\.,]\d+)?Y)?(\d+([\.,]\d+)?M)?(\d+([\.,]\d+)?W)?(\d+([\.,]\d+)?D)?)?(T(\d+([\.,]\d+)?H)?(\d+([\.,]\d+)?M)?(\d+([\.,]\d+)?S)?)?$/i
, checkTypeWarning('ISO Duration'));
