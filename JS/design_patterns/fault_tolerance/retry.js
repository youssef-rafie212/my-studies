// immediate retry
const retry = (operation) => {
  let currentTry = 0;
  let maxTry = 10;

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

const externalCall = () => {
  const shouldPass = Math.random() < 0.5;
  if (shouldPass) {
    return true;
  }
  throw "Failed";
};

retry(externalCall);
