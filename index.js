import { homedir } from 'node:os';
import { chdir, cwd, stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';

import { commands } from './commands/index.js';
import { conductor } from './conductor/conductor.js';
import { MESSAGES } from './constants/messages.js';

const userName = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1] || 'Reviewer 1';
console.log(MESSAGES.WELCOME(userName));

try {
  chdir(homedir());
} catch {
  console.log(MESSAGES.FAIL);
} finally {
  console.log(MESSAGES.CWD(cwd()));
}

const rl = createInterface({ input, output, prompt: '>' });

rl.on('SIGINT', () => {
  console.log(MESSAGES.BYE(userName));
  process.exit();
});

rl.on('line', async (line) => {
  if (line === '.exit') {
    rl.emit('SIGINT');
  }

  const [cmd, ...params] = line.split(' ');
  const command = commands[cmd];

  try {
    await conductor.run(command(params));
  } catch (er) {
    console.log(er.message); // TODO: remove
    console.log(MESSAGES.FAIL);
  } finally {
    console.log(MESSAGES.CWD(cwd()));
  }

  rl.prompt();
});

rl.prompt();
