import { CdCmd } from './cd-cmd.js';
import { HashCmd } from './hash-cmd.js';
import { LsCmd } from './ls-cmd.js';
import { OsCmd } from './os-cmd.js';
import { UpCmd } from './up-cmd.js';

export const commands = {
  up: (params) => new UpCmd(params),
  cd: (params) => new CdCmd(params),
  ls: (params) => new LsCmd(params),
  os: (params) => new OsCmd(params),
  hash: (params) => new HashCmd(params),
};
