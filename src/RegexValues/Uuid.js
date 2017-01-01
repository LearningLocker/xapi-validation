const { checkRegex } = require('rulr');

module.exports = checkRegex(
  /^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[8,9,a,b][A-Z0-9]{3}-[A-Z0-9]{12}\}?$/i
);
