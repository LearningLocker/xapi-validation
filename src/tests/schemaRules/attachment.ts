import Test from '../helpers/test';
import describeRequiredProp from '../describeRequiredProp';
import describeOptionalProp from '../describeOptionalProp';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';
import { iri, languageMap, imt, integerValue, stringValue } from '../factory';

const validData = {
  usageType: 'http://www.example.com',
  display: {},
  description: {},
  contentType: 'application/json',
  length: 10,
  sha2: 'test',
  fileUrl: 'http://www.example.com',
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    ...validData,
    usageType: 'http://adlnet.gov/expapi/attachments/signature',
    contentType: 'application/json',
  }, 'not a valid signed content type', test);
  itsValid({
    ...validData,
    usageType: 'http://adlnet.gov/expapi/attachments/signature',
    contentType: 'application/octet-stream',
  }, test);
  describeRequiredProp('usageType', iri, validData, test);
  describeRequiredProp('display', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeRequiredProp('contentType', imt, validData, test);
  describeRequiredProp('length', integerValue, validData, test);
  describeRequiredProp('sha2', stringValue, validData, test);
  describeOptionalProp('fileUrl', iri, validData, test);
};
