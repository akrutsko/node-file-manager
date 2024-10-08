import { EOL } from 'node:os';
import { stdin as input, stdout as output, cwd } from 'node:process';
import { createInterface } from 'node:readline';

const userName = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}!` + EOL);

const rl = createInterface({ input, output, prompt: `${cwd()}> ` });

rl.on('SIGINT', () => {
  console.log(EOL + `Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});

rl.on('line', (line) => {
  if (line === '.exit') {
    rl.emit('SIGINT');
  }

  rl.prompt();
});

rl.prompt();
