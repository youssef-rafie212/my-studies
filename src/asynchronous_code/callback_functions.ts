const fetchDataCallBack = (callback: Function): void => {
  console.log("fetching data ...");
  setTimeout(() => {
    callback("data");
  }, 3000);
};

const callback = (data: string): void => {
  console.log(data);
};

fetchDataCallBack(callback);
