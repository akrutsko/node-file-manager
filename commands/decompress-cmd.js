import { createReadStream, createWriteStream } from 'node:fs';
import { basename, parse, resolve } from 'node:path';
import { cwd } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { createBrotliDecompress } from 'node:zlib';

import { MESSAGES } from '../constants/messages.js';

export class DecompressCmd {
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

    const destinationFile = parse(sourceFile).name;
    const destinationFilePath = resolve(cwd(), this.params[1], destinationFile);
    const writable = createWriteStream(destinationFilePath);

    const brotli = createBrotliDecompress();

    await pipeline(readable, brotli, writable);
  }
}
