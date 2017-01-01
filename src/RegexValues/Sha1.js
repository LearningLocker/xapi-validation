const { checkRegex } = require('rulr');

module.exports = checkRegex(
  /^\b[0-9a-f]{5,40}$/i
);
