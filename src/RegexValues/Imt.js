const { checkRegex } = require('rulr');

module.exports = checkRegex(
  /^((application|audio|example|image|message|model|multipart|text|video)(\/[-\w\+\.]+)(;\s*[-\w]+\=[-\w]+)*;?)$/
);
