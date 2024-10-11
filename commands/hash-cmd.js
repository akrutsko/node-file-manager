import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createHash } from 'node:crypto';

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

    const hash = createHash('sha256');
    const readable = createReadStream(this.params[0]);

    await pipeline(readable, hash);
    console.log(hash.digest('hex'));
  }
}
