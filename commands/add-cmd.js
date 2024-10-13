import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class AddCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const pathToFile = resolve(cwd(), this.params[0]);
    await writeFile(pathToFile, '', { flag: 'wx' });
  }
}
