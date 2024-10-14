class Conductor {
  async run(command) {
    await command.execute();
  }
}

export const conductor = new Conductor();
