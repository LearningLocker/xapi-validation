/* tslint:disable:max-line-length */
import { pathString, Path } from 'rulr';

export const subStatementError = () =>
  (path: Path) =>
    `The SubStatement should not contain a SubStatement in ${pathString(path)}. Please remove this nested SubStatement to remove this error.`;

export const contextPropError = () =>
  (path: Path) =>
    `The platform and revision properties must only be used if \`object.objectType\` is "Activity" in ${pathString(path)}. Please remove these properties or ensure the object is an Activity to remove this error.`;

export const voidError = (voidVerbId: string) =>
  (path: Path) =>
    `\`${voidVerbId}\` must only be used if \`object.objectType\` is "StatementRef" in ${pathString(path)}. Please use a different verb identifier or use a StatementRef in the object to remove this error.`;

export const membersTypeError = () =>
  (path: Path) =>
    `An authority group can only contain agents as members in \`${pathString(path)}\`. Please ensure that all members are agents to remove this error.`;

export const membersLengthError = () =>
  (path: Path) =>
    `An authority group can only contain agents as members in \`${pathString(path)}\`. Please ensure that all members are agents to remove this error.`;

export const noMembersError = () =>
  (path: Path) =>
    `An anonymous group must have at least one member in ${pathString(path)}. Please add a member to remove this error.`;

export const noIfiError = () =>
  (path: Path) =>
    `An Agent must be identified by one of the four types of IFIs in ${pathString(path)}. Please use one of the four types of IFIs (mbox, mbox_sha1sum, openid, or account) to remove this error.`;

export const invalidComponentsError = (invalidComponents: string[]) =>
  (path: Path) =>
    `Didn't expect unsupported components (${invalidComponents.join(', ')}) to be set in ${pathString(path)}. Please remove the unsupported components to remove this error.`;

export const ifiCountError = (usedIfis: string[]) =>
  (path: Path) =>
    `There are too many inverse functional identifiers (IFI) in ${pathString(path)}. Please select one IFI from the \`${usedIfis.join(', ')}\` and remove the other IFIs to remove this error.`;
