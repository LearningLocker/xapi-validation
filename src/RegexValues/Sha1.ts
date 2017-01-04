import { checkRegex } from 'rulr';

export default checkRegex(
  /^\b[0-9a-f]{5,40}$/i
);
