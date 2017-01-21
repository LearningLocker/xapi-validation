import { Rule } from 'rulr';
import * as values from './values';

const requireFile = (file: string) =>
  (ruleAccessor: ((mod: any) => any)): Rule =>
    (data, path) =>
      ruleAccessor(require(file))(data, path);

const requireMap = requireFile('./maps');
const requireRule = (file: string) => requireFile(file)((mod: any) => mod.default);

export const anyValue = values.anyValue;
export const account = requireRule('./schemaRules/account');
export const activity = requireRule('./schemaRules/activity');
export const actor = requireRule('./schemaRules/actor');
export const agent = requireRule('./schemaRules/agent');
export const attachment = requireRule('./schemaRules/attachment');
export const authority = requireRule('./schemaRules/authority');
export const booleanValue = values.booleanValue;
export const context = requireRule('./schemaRules/context');
export const definition = requireRule('./schemaRules/definition');
export const duration = requireRule('./regexValues/duration');
export const extensions = requireMap(maps => maps.extensions);
export const group = requireRule('./schemaRules/group');
export const imt = requireRule('./regexValues/imt');
export const integerValue = values.integerValue;
export const interactionComponent = requireRule('./schemaRules/interactionComponent');
export const interactionType = requireRule('./regexValues/interactionType');
export const iri = requireRule('./regexValues/iri');
export const language = requireRule('./regexValues/language');
export const languageMap = requireMap(maps => maps.languageMap);
export const mailto = requireRule('./regexValues/mailto');
export const numberValue = values.numberValue;
export const object = requireRule('./schemaRules/object');
export const result = requireRule('./schemaRules/result');
export const scaledValue = values.scaledValue;
export const sha1 = requireRule('./regexValues/sha1');
export const statement = requireRule('./schemaRules/statement');
export const statementRef = requireRule('./schemaRules/statementRef');
export const stringValue = values.stringValue;
export const subStatement = requireRule('./schemaRules/subStatement');
export const timestamp = requireRule('./regexValues/timestamp');
export const uuid = requireRule('./regexValues/uuid');
export const verb = requireRule('./schemaRules/verb');
export const version = requireRule('./regexValues/version');
