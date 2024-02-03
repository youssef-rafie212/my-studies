class Process {
  constructor(public state: string) {}
}

const Singleton = (function () {
  class ProcessManager {
    static numberOfInstances: number = 0;
    public numberOfProcesses: number = 0;
    constructor() {
      ProcessManager.numberOfInstances++;
    }
  }

  let processManager: ProcessManager;

  const createProcessManager = (): ProcessManager => {
    const newPM: ProcessManager = new ProcessManager();
    return newPM;
  };

  return {
    getProcessManager: (): ProcessManager => {
      if (!processManager) {
        processManager = createProcessManager();
      }
      console.log(ProcessManager.numberOfInstances); // always 1
      return processManager;
    },
  };
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
console.log(processManager === processManager2); //true
