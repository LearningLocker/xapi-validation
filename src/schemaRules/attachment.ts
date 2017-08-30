import { composeRules, restrictToSchema, optional, required, Rule } from 'rulr';
import { isPlainObject } from 'lodash';
import { iri, languageMap, imt, integerValue, stringValue } from '../factory';
import SignedContentTypeWarning from '../warnings/SignedContentTypeWarning';

export default composeRules([
  restrictToSchema({
    usageType: required(iri),
    display: required(languageMap),
    description: optional(languageMap),
    contentType: required(imt),
    length: required(integerValue),
    sha2: required(stringValue),
    fileUrl: optional(iri),
  }),
  (data, path) => {
    if (!isPlainObject(data)) return [];
    if (
      data.usageType === 'http://adlnet.gov/expapi/attachments/signature' &&
      data.contentType !== 'application/octet-stream'
    ) {
      return [new SignedContentTypeWarning(data, path, data.contentType)];
    }
    return [];
  }
]) as Rule;
