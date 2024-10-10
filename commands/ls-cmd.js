import { readdir } from 'node:fs/promises';

import { MESSAGES } from '../constants/messages.js';

export class LsCmd {
  constructor(params) {
    this.params = params;
  }

  async execute() {
    if (this.params.length) {
      console.log(MESSAGES.INVALID_INPUT);
      return;
    }

    const files = await readdir('.', { withFileTypes: true });
    const ls = files
      .map((dirent) => ({
        Name: dirent.name,
        Type: dirent.isDirectory() ? 'directory' : 'file',
      }))
      .sort((a, b) => {
        if (a.Type === b.Type) {
          return a.Name.localeCompare(b.Name);
        }

        return a.Type === 'file' ? 1 : -1;
      });

    console.table(ls);
  }
}
