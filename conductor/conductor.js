class Conductor {
  run(command) {
    command.execute();
  }
}

export const conductor = new Conductor();
