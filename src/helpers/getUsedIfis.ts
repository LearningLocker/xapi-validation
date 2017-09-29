import { isPlainObject } from 'lodash';

export default (data: any): string[] => {
  if (!isPlainObject(data)) return [];
  const ifis = ['mbox', 'mbox_sha1sum', 'openid', 'account'];
  const keys = Object.keys(data);
  return ifis.filter(ifi => keys.includes(ifi));
};
