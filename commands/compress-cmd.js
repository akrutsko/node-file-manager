import { createReadStream, createWriteStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { cwd } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';

import { MESSAGES } from '../constants/messages.js';

export class CompressCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length !== 2) {
      console.log(MESSAGES.INVALID);
      return;
    }

    const sourceFilePath = resolve(cwd(), this.params[0]);
    const readable = createReadStream(sourceFilePath);

    const destinationFilePath = resolve(cwd(), this.params[1]);
    const writable = createWriteStream(destinationFilePath);

    const brotli = createBrotliCompress();

    await pipeline(readable, brotli, writable);
  }
}
