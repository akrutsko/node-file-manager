import { EOL } from 'node:os';

export const MESSAGES = {
  WELCOME: (userName) => `Welcome to the File Manager, ${userName}!${EOL}`,
  BYE: (userName) => `${EOL}Thank you for using File Manager, ${userName}, goodbye!`,
  CWD: (dirName) => `${EOL}You are currently in ${dirName}${EOL}`,
  INVALID_INPUT: 'Invalid input',
  INVALID_COMMAND: 'Invalid command',
  FAIL: 'Operation failed',
  CPUS: (cpus) => `Overall CPUs: ${cpus}`,
  EOL: (eol) => `End of Line: ${JSON.stringify(eol)}`,
};
