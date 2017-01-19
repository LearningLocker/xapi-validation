export default (data: any): string[] => {
  const ifis = ['mbox', 'mbox_sha1sum', 'openid', 'account'];
  const keys = Object.keys(data);
  return ifis.filter(ifi => keys.includes(ifi));
};
