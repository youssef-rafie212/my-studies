class CryptoAPI {
  getValue(coin: string): number {
    console.log("calling external API");
    switch (coin) {
      case "Bitcoin":
        return 12400;
      case "Litecoin":
        return 240;
      case "Ethereum":
        return 10000;
      default:
        throw new Error("Invalid coin value");
    }
  }
}

class CryptoProxy {
  private api: CryptoAPI = new CryptoAPI();
  private cache: { [coin: string]: number } = {};

  getValue(coin: string): number {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy: CryptoProxy = new CryptoProxy();
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
