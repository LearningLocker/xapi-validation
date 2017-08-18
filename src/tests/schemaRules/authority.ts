import Test from '../helpers/test';
import itsInvalid from '../itsInvalid';
import itsValid from '../itsValid';
import agentSchema from '../helpers/agentSchema';

const agentMember = {
  objectType: 'Agent',
  mbox: 'mailto:test@example.com',
};

export default (test: Test) => {
  itsInvalid(10, 'not an object', test);
  itsInvalid({
    objectType: 'InvalidObjectType',
    mbox: 'mailto:test@example.org',
  }, 'uses invalid objectType', test);
  itsInvalid({
    objectType: 'Group',
    member: [],
  }, 'contains no members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember],
  }, 'contains too few members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember],
    mbox: agentMember.mbox
  }, 'contains an mbox on a group', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember],
    account: {name: 'test', homePage: 'http://example.org'}
  }, 'contains an account on a group', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember],
    mbox_sha1sum: 'a9993e364706816aba3e25717850c26c9cd0d89d'
  }, 'contains an mbox_sha1sum on a group', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember],
    openid: 'http://example.org/test'
  }, 'contains an openid on a group', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, agentMember, agentMember],
  }, 'contains too many members', test);
  itsInvalid({
    objectType: 'Group',
    member: [agentMember, {
      objectType: 'Group',
      mbox: 'mailto:test@example.com',
    }],
  }, 'contains group members', test);
  itsValid({
    objectType: 'Group',
    member: [agentMember, agentMember],
  }, test);
  agentSchema(test);
};
