class Process {
  constructor(state) {
    this.state = state;
  }
}

const Singleton = (function () {
  class ProcessManager {
    constructor() {
      this.numberOfProcesses = 0;
    }
  }

  let processManager;

  const createProcessManager = () => {
    const newPM = new ProcessManager();
    return newPM;
  };

  return {
    getProcessManager: () => {
      if (!processManager) {
        processManager = createProcessManager();
      }
      return processManager;
    },
  };
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
console.log(processManager === processManager2); //true
