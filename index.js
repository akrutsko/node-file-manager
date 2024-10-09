import { homedir } from 'node:os';
import { chdir, cwd, stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';

import { OsCmd } from './commands/index.js';
import { conductor } from './conductor/conductor.js';
import { MESSAGES } from './constants/messages.js';

const userName = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1] || 'Reviewer 1';
console.log(MESSAGES.WELCOME(userName));

try {
  chdir(homedir());
} catch {
  console.log(MESSAGES.FAIL);
}
console.log(MESSAGES.CWD(cwd()));

const rl = createInterface({ input, output, prompt: '>' });

rl.on('SIGINT', () => {
  console.log(MESSAGES.BY(userName));
  process.exit();
});

rl.on('line', (line) => {
  const [cmd, ...params] = line.split(' ');

  try {
    switch (cmd) {
      case '':
        break;
      case '.exit':
        rl.emit('SIGINT');
      case 'os':
        conductor.run(new OsCmd(params));
        break;
      default:
        console.log(MESSAGES.FAIL);
    }
  } catch {
    console.log(MESSAGES.FAIL);
  }

  console.log(MESSAGES.CWD(cwd()));
  rl.prompt();
});

rl.prompt();
