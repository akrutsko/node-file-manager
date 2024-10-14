import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import { pipeline } from 'node:stream/promises';

import { MESSAGES } from '../constants/messages.js';

export class HashCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const path = resolve(cwd(), this.params[0]);
    const readable = createReadStream(path);
    const hash = createHash('sha256');

    await pipeline(readable, hash);
    console.log(hash.digest('hex'));
  }
}
