import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class RmCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const filePath = resolve(cwd(), this.params[0]);
    await rm(filePath);
  }
}
