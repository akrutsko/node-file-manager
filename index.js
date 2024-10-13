import { homedir } from 'node:os';
import { chdir, cwd, stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';

import { commands } from './commands/index.js';
import { conductor } from './conductor/conductor.js';
import { MESSAGES } from './constants/messages.js';
import { parseArgs } from './utils/parse-args.js';

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
  console.log(MESSAGES.BYE(userName));
  process.exit();
});

rl.on('line', async (line) => {
  if (line === '.exit') {
    rl.emit('SIGINT');
  }

  const [cmd, ...params] = parseArgs(line);
  const command = commands[cmd];

  if (!command) {
    console.log(MESSAGES.INVALID);
  } else {
    try {
      await conductor.run(command(params));
    } catch (err) {
      console.log(err.message);
      console.log(MESSAGES.FAIL);
    }
  }

  console.log(MESSAGES.CWD(cwd()));
  rl.prompt();
});

rl.prompt();
