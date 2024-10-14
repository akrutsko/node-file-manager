import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { cwd } from 'node:process';
import { pipeline } from 'node:stream/promises';

import { MESSAGES } from '../constants/messages.js';

export class MvCmd {
  constructor(params) {
    this.params = params;
  }

  execute() {
    if (this.params.length !== 2) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const sourceFile = basename(this.params[0]);
    const sourceFilePath = resolve(cwd(), this.params[0]);
    const destinationFile = resolve(cwd(), this.params[1], sourceFile);

    return new Promise((res, rej) => {
      const readable = createReadStream(sourceFilePath);
      const writable = createWriteStream(destinationFile, { flags: 'wx' });

      pipeline(readable, writable)
        .then(() => unlink(sourceFilePath))
        .then(res)
        .catch(rej);
    });
  }
}
