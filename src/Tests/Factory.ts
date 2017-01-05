const requireTest = rule => (data, path) =>
  require(rule)(data, path);

export const account = requireTest('./SchemaRules/Account');
export const activity = requireTest('./SchemaRules/Activity');
export const actor = requireTest('./SchemaRules/Actor');
export const agent = requireTest('./SchemaRules/Agent');
export const attachment = requireTest('./SchemaRules/Attachment');
export const authority = requireTest('./SchemaRules/Authority');
export const boolean = requireTest('./Values/Boolean');
export const context = requireTest('./SchemaRules/Context');
export const contextActivities = requireTest('./SchemaRules/ContextActivities');
export const definition = requireTest('./SchemaRules/Definition');
export const duration = requireTest('./RegexValues/Duration');
export const extensions = requireTest('./Maps/extensions');
export const group = requireTest('./SchemaRules/Group');
export const imt = requireTest('./RegexValues/Imt');
export const integer = requireTest('./Values/Integer');
export const interactionComponent = requireTest('./SchemaRules/InteractionComponent');
export const interactionType = requireTest('./RegexValues/InteractionType');
export const iri = requireTest('./RegexValues/Iri');
export const language = requireTest('./RegexValues/Language');
export const languageMap = requireTest('./Maps/languageMap');
export const mailto = requireTest('./RegexValues/Mailto');
export const number = requireTest('./Values/Number');
export const object = requireTest('./SchemaRules/Object');
export const result = requireTest('./SchemaRules/Result');
export const scaled = requireTest('./Values/Scaled');
export const score = requireTest('./SchemaRules/Score');
export const sha1 = requireTest('./RegexValues/Sha1');
export const statement = requireTest('./SchemaRules/Statement');
export const statementRef = requireTest('./SchemaRules/StatementRef');
export const string = requireTest('./Values/String');
export const subStatement = requireTest('./SchemaRules/SubStatement');
export const subStatementObject = requireTest('./SchemaRules/SubStatementObject');
export const timestamp = requireTest('./RegexValues/Timestamp');
export const uuid = requireTest('./RegexValues/Uuid');
export const verb = requireTest('./SchemaRules/Verb');
export const version = requireTest('./RegexValues/Version');