import { EOL, cpus, userInfo, arch } from 'node:os';
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
        console.table(cores.map(({ model, speed }) => ({ model, speed: (speed / 1000).toFixed(2) + 'GHz' })));
        break;
      case '--homedir':
        console.log(userInfo().homedir);
        break;
      case '--username':
        console.log(userInfo().username);
        break;
      case '--architecture':
        console.log(arch());
        break;
      default:
        console.log(MESSAGES.INVALID_INPUT);
    }
  }
}
