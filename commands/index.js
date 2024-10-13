import { AddCmd } from './add-cmd.js';
import { CatCmd } from './cat-cmd.js';
import { CdCmd } from './cd-cmd.js';
import { CompressCmd } from './compress-cmd.js';
import { DecompressCmd } from './decompress-cmd.js';
import { HashCmd } from './hash-cmd.js';
import { LsCmd } from './ls-cmd.js';
import { OsCmd } from './os-cmd.js';
import { UpCmd } from './up-cmd.js';

export const commands = {
  up: (params) => new UpCmd(params),
  cd: (params) => new CdCmd(params),
  ls: (params) => new LsCmd(params),
  cat: (params) => new CatCmd(params),
  add: (params) => new AddCmd(params),
  os: (params) => new OsCmd(params),
  hash: (params) => new HashCmd(params),
  compress: (params) => new CompressCmd(params),
  decompress: (params) => new DecompressCmd(params),
};
