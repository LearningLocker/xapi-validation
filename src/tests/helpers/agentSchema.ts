import Test from '../helpers/test';
import describeOptionalProp from '../describeOptionalProp';
import describeIfiProp from '../describeIfiProp';
import itsInvalid from '../itsInvalid';
import {
  stringValue,
  mailto,
  sha1,
  iri,
  account,
} from '../factory';

const validData = {
  mbox: 'mailto:test@example.com',
};

export default (test: Test) => {
  describeOptionalProp('name', stringValue, validData, test);
  describeIfiProp('mbox', mailto, test);
  describeIfiProp('mbox_sha1sum', sha1, test);
  describeIfiProp('openid', iri, test);
  describeIfiProp('account', account, test);
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
  }, 'missing an IFI', test);
  itsInvalid({
    objectType: 'Agent',
    name: 'Test',
    mbox: 'mailto:test@example.com',
    openid: 'http://www.example.com',
  }, 'containing too many IFIs', test);
};
