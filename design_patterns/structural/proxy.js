class CryptoAPI {
  getValue(coin) {
    console.log("calling external API");
    switch (coin) {
      case "Bitcoin":
        return 12400;
      case "Litecoin":
        return 240;
      case "Ethereum":
        return 10000;
    }
  }
}

class CryptoProxy {
  constructor() {
    this.api = new CryptoAPI();
    this.cache = {};
  }

  getValue(coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy = new CryptoProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
// not calling the API anymore
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
