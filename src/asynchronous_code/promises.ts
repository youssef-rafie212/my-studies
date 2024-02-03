const fetchDataPromises = (): Promise<string> => {
  console.log("fetching data");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
      // reject("ERROR");
    }, 3000);
  });
};

fetchDataPromises()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
