import { checkRegex } from 'rulr';

export default checkRegex(
  /^((application|audio|example|image|message|model|multipart|text|video)(\/[-\w\+\.]+)(;\s*[-\w]+\=[-\w]+)*;?)$/
);
