import { OsCmd } from './os-cmd.js';
import { UpCmd } from './up-cmd.js';

export const commands = {
  os: (params) => new OsCmd(params),
  up: (params) => new UpCmd(params),
};
