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

    const sourceFile = basename(this.params[0]);
    const sourceFilePath = resolve(cwd(), this.params[0]);
    const readable = createReadStream(sourceFilePath);

    const destinationFile = sourceFile + '.br';
    const destinationFilePath = resolve(cwd(), this.params[1], destinationFile);
    const writable = createWriteStream(destinationFilePath);

    const brotli = createBrotliCompress();

    await pipeline(readable, brotli, writable);
  }
}
