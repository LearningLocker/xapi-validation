const { checkRegex } = require('rulr');

module.exports = checkRegex(
  /^((choice)|(sequencing)|(likert)|(matching)|(performance)|(true-false)|(fill-in)|(long-fill-in)|(numeric)|(other))$/
);
