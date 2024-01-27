const fetchData = () => {
  console.log("fetching data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
      // reject("ERROR");
    }, 3000);
  });
};

fetchData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
