import * as values from './Values';

const requireFile = file => ruleAccessor => (data, path) =>
  ruleAccessor(require(file))(data, path);

const requireMap = requireFile('./maps');
const requireRule = file => requireFile(file)(rule => rule);

export const any = values.any;
export const account = requireRule('./SchemaRules/Account');
export const activity = requireRule('./SchemaRules/Activity');
export const actor = requireRule('./SchemaRules/Actor');
export const agent = requireRule('./SchemaRules/Agent');
export const attachment = requireRule('./SchemaRules/Attachment');
export const authority = requireRule('./SchemaRules/Authority');
export const boolean = values.boolean;
export const context = requireRule('./SchemaRules/Context');
export const definition = requireRule('./SchemaRules/Definition');
export const duration = requireRule('./RegexValues/Duration');
export const extensions = requireMap(maps => maps.extensions);
export const group = requireRule('./SchemaRules/Group');
export const imt = requireRule('./RegexValues/Imt');
export const integer = values.integer;
export const interactionComponent = requireRule('./SchemaRules/InteractionComponent');
export const interactionType = requireRule('./RegexValues/InteractionType');
export const iri = requireRule('./RegexValues/Iri');
export const language = requireRule('./RegexValues/Language');
export const languageMap = requireMap(maps => maps.languageMap);
export const mailto = requireRule('./RegexValues/Mailto');
export const number = values.number;
export const object = requireRule('./SchemaRules/Object');
export const result = requireRule('./SchemaRules/Result');
export const scaled = values.scaled;
export const sha1 = requireRule('./RegexValues/Sha1');
export const statement = requireRule('./SchemaRules/Statement');
export const statementRef = requireRule('./SchemaRules/StatementRef');
export const string = values.string;
export const subStatement = requireRule('./SchemaRules/SubStatement');
export const timestamp = requireRule('./RegexValues/Timestamp');
export const uuid = requireRule('./RegexValues/Uuid');
export const verb = requireRule('./SchemaRules/Verb');
export const version = requireRule('./RegexValues/Version');
