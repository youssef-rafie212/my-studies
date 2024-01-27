class Fedex {
  calculate() {
    return 2.43;
  }
}

class UPS {
  calculate() {
    return 1.56;
  }
}

class USPS {
  calculate() {
    return 3.1;
  }
}

class Shipping {
  constructor() {
    this.company = ""; // just for initialization
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate() {
    return this.company.calculate();
  }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log(shipping.calculate());

shipping.setStrategy(ups);
console.log(shipping.calculate());

shipping.setStrategy(usps);
console.log(shipping.calculate());
