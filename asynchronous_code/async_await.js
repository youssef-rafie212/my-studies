const fetchData = () => {
  console.log("fetching data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
      // reject("ERROR");
    }, 3000);
  });
};

const processData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

processData();
