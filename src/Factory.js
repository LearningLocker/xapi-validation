const values = require('./values');

const requireFile = file => ruleAccessor => (data, path) =>
  ruleAccessor(require(file))(data, path);

const requireMap = requireFile('./maps');
const requireRule = file => requireFile(file)(rule => rule);

module.exports = {
  any: values.any,
  account: requireRule('./SchemaRules/Account'),
  activity: requireRule('./SchemaRules/Activity'),
  actor: requireRule('./SchemaRules/Actor'),
  agent: requireRule('./SchemaRules/Agent'),
  attachment: requireRule('./SchemaRules/Attachment'),
  authority: requireRule('./SchemaRules/Authority'),
  boolean: values.boolean,
  context: requireRule('./SchemaRules/Context'),
  definition: requireRule('./SchemaRules/Definition'),
  duration: requireRule('./RegexValues/Duration'),
  extensions: requireMap(maps => maps.extensions),
  float: values.float,
  group: requireRule('./SchemaRules/Group'),
  imt: requireRule('./RegexValues/Imt'),
  integer: values.integer,
  interactionComponent: requireRule('./SchemaRules/InteractionComponent'),
  interactionType: requireRule('./RegexValues/InteractionType'),
  iri: requireRule('./RegexValues/Iri'),
  language: requireRule('./RegexValues/Language'),
  languageMap: requireMap(maps => maps.languageMap),
  mailto: requireRule('./RegexValues/Mailto'),
  number: values.number,
  object: requireRule('./SchemaRules/Object'),
  result: requireRule('./SchemaRules/Result'),
  scaled: values.scaled,
  sha1: requireRule('./RegexValues/Sha1'),
  statement: requireRule('./SchemaRules/Statement'),
  statementRef: requireRule('./SchemaRules/StatementRef'),
  string: values.string,
  subStatement: requireRule('./SchemaRules/SubStatement'),
  timestamp: requireRule('./RegexValues/Timestamp'),
  uuid: requireRule('./RegexValues/Uuid'),
  verb: requireRule('./SchemaRules/Verb'),
  version: requireRule('./RegexValues/Version'),
};
