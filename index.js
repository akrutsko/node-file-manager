import { EOL } from 'node:os';

const userName = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}!` + EOL);
