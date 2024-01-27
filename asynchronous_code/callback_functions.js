const fetchData = (callback) => {
  console.log("fetching data ...");
  setTimeout(() => {
    callback("data");
  }, 3000);
};

const callback = (data) => {
  console.log(data);
};

fetchData(callback);
