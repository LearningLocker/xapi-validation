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
