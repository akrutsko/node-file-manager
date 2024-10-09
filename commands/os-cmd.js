import { EOL, cpus } from 'node:os';
import { MESSAGES } from '../constants/messages.js';

export class OsCmd {
  constructor(params) {
    this.params = params;
  }

  execute() {
    if (this.params.length !== 1) {
      console.log(MESSAGES.INVALID_INPUT);
      return;
    }

    switch (this.params[0]) {
      case '--EOL':
        console.log(MESSAGES.EOL(EOL));
        break;
      case '--cpus':
        const cores = cpus();

        console.log(MESSAGES.CPUS(cores.length));
        console.table(cores.map((cpu) => ({ model: cpu.model, speed: (cpu.speed / 1000).toFixed(2) + 'GHz' })));
        break;
      default:
        console.log(MESSAGES.INVALID_INPUT);
    }
  }
}
