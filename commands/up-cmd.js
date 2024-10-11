import { chdir } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class UpCmd {
  constructor(params) {
    this.params = params;
  }

  execute() {
    if (this.params.length) {
      console.log(MESSAGES.INVALID);
      return;
    }

    chdir('..');
  }
}
