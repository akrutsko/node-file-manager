import { resolve } from 'node:path';
import { chdir, cwd } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class CdCmd {
  constructor(params) {
    this.params = params;
  }

  execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const path = resolve(cwd(), this.params[0]);
    chdir(path);
  }
}
