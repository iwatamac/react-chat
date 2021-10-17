import crypto from 'crypto'
/* nodeでmd5を使うにはcryptoをimportする */

export const gravatarPath = (string) => {
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  /* md5を作るハッシュ */
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  /* 出力。'hex'は16進数を使うということ */

  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};