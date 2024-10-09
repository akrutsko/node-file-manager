import { EOL } from 'node:os';
import { cwd, stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline';

import { OsCmd } from './commands/index.js';
import { conductor } from './conductor/conductor.js';
import { MESSAGES } from './constants/messages.js';

const userName = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}!` + EOL);
console.log(`You are currently in ${cwd()}!` + EOL);

const rl = createInterface({ input, output, prompt: 'File Manager> ' });

rl.on('SIGINT', () => {
  console.log(EOL + `Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});

rl.on('line', (line) => {
  if (line === '.exit') {
    rl.emit('SIGINT');
  }

  const [cmd, ...params] = line.split(' ');

  switch (cmd) {
    case 'os':
      conductor.run(new OsCmd(params));
      break;
  }

  rl.prompt();
});

rl.prompt();
