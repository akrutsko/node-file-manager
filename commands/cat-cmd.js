import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { resolve } from 'node:path';
import { cwd, stdout } from 'node:process';

import { MESSAGES } from '../constants/messages.js';

export class CatCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID);
      return;
    }

    return new Promise((res, rej) => {
      const path = resolve(cwd(), this.params[0]);
      const readable = createReadStream(path, 'utf8');

      readable.on('data', (chunk) => stdout.write(chunk));

      readable.on('end', () => {
        stdout.write(EOL);
        res();
      });

      readable.on('error', rej);
    });
  }
}
