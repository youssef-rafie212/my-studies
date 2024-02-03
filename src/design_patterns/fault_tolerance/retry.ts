// immediate retry
const retry = (operation: Function): void => {
  let currentTry: number = 0;
  let maxTry: number = 10;

  while (true) {
    try {
      operation();
      console.log("succeded!");
      break;
    } catch (_) {
      currentTry++;
      console.log(`failed attempt ${currentTry}`);
      if (currentTry === maxTry) {
        console.log("retry maximum reached , quiting... ");
        break;
      }
    }
  }
};

const externalCall = (): boolean => {
  const shouldPass: boolean = Math.random() < 0.5;
  if (shouldPass) {
    return true;
  }
  throw "Failed";
};

retry(externalCall);
