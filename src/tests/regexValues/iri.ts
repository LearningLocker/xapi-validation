import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid('http', 'not an IRI', test);
  itsInvalid(10, 'not a String', test);
  itsValid('http://www.example.com', test);

  // https://mathiasbynens.be/demo/url-regex
  itsValid('http://fo-o.com/blah_blah_(wikipedia)#cite-1', test);
  itsValid('https://www.example.com/foo/?bar=b%20az&inga=42&quux', test);
  itsValid('http://userid:password@example.com:8080/', test);
  itsValid('http://userid:password@example.com/', test);
  itsValid('http://142.42.1.1:8080/', test);
  itsValid('http://foo.com/unicode_(✪)_in_parens', test);
  itsValid('http://foo.com/(something)?after=parens', test);
  itsValid('http://code.google.com/events/#&product=browser', test);
  itsValid('ftp://foo.bar/baz', test);
  itsValid('http://⌘➡例子.测试✪उदाहरण.परीकإختبار/䨹', test);
  itsValid('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', test);
  itsValid('http://www.example.com/fgdfgd?sdfsdfsdf#fgdgdfg', test);

  // tslint:disable-next-line:max-line-length
  itsValid('http://some.large.test.string.for.regex/some-large-string/string.html?largeString=largeString&someStrangeText=%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D1%82%D1%83%D0%B1%D0%B5%D1%80%D0%BA%D1%83%D0%BB%D0%B5%D0%B7', test);
  itsValid('https://some.strange.test/tests/very-strange-test-that-hangs-regex/test#test/test"', test);

  // Tests from the conformance suite.
  itsInvalid('ab=c://should.fail.com', 'not an IRI', test);
  itsInvalid('not.a.valid.iri.com/verb', 'not an IRI', test);
};
