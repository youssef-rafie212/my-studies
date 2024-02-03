const fetchDataAsyncAwait = (): Promise<string> => {
  console.log("fetching data");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
      // reject("ERROR");
    }, 3000);
  });
};

const processData = async (): Promise<void> => {
  try {
    const data: string = await fetchDataAsyncAwait();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

processData();
