import { existsSync } from 'node:fs';
import { rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class RnCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 2) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const sourceFile = resolve(cwd(), this.params[0]);
    const destinationFile = resolve(cwd(), this.params[1]);

    if (existsSync(destinationFile)) {
      throw new Error(`EEXIST: file already exists, ${destinationFile}`);
    }

    await rename(sourceFile, destinationFile);
  }
}
