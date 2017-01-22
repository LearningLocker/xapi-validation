import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';

export default (test: Test) => {
  itsInvalid(10, 'not a String', test);

  itsValid('20090131T230000-0100', test); // Basic format
  itsValid('2009-01-31T23:00:00-01:00', test); // Extended format
  itsValid('20170101', test); // Date basic format
  itsValid('2017-01-01', test); // Date extended format

  itsInvalid('2009-01-31T230000-01:00', 'not a Timestamp', test);
  itsInvalid('2017', 'not a Timestamp', test);
  itsInvalid('2017-01', 'not a Timestamp', test);

  // http://stackoverflow.com/questions/12756159
  itsInvalid('2013-99-99T04:13:00+00:00', 'not a Timestamp', test);
  itsValid('0785-10-10T04:13:00+00:00', test);
};
