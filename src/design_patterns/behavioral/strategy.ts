abstract class Company {
  abstract calculate(): number;
}

class Fedex extends Company {
  calculate(): number {
    return 2.43;
  }
}

class UPS extends Company {
  calculate(): number {
    return 1.56;
  }
}

class USPS extends Company {
  calculate(): number {
    return 3.1;
  }
}

class Shipping {
  public company: Company | null = null;

  setStrategy(company: Company): void {
    this.company = company;
  }

  calculate(): number {
    return this.company!.calculate();
  }
}

const fedex: Fedex = new Fedex();
const ups: UPS = new UPS();
const usps: USPS = new USPS();
const shipping: Shipping = new Shipping();

shipping.setStrategy(fedex);
console.log(shipping.calculate());

shipping.setStrategy(ups);
console.log(shipping.calculate());

shipping.setStrategy(usps);
console.log(shipping.calculate());
