import { existsSync } from 'node:fs';
import { rename } from 'node:fs/promises';
import { join, parse, resolve } from 'node:path';
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

    const sourceFilePath = resolve(cwd(), this.params[0]);
    const sourcePath = parse(sourceFilePath).dir;

    const destinationFilePath = join(sourcePath, this.params[1]);

    if (existsSync(destinationFilePath)) {
      throw new Error(`EEXIST: file already exists, renamefile '${sourceFilePath}' -> '${destinationFilePath}'`);
    }

    await rename(sourceFilePath, destinationFilePath);
  }
}
