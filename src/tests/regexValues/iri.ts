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
};
