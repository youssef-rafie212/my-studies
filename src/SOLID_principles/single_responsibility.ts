// WRONG WAY (kept in JS code)
// class Customer {
//   constructor(name) {
//     this.name = name;
//   }

//   storeCustomer(customerName) {
//     // storing the customer in the database
//   }

//   generateCustomerReport(customerName){
//     // generate a report
//   }

// }

// RIGHT WAY
class Customer {
  constructor(public name: string) {}
}

class CustomerDB {
  storeCustomer(customerName: string): void {
    console.log(`storing customer @${customerName} in the database`);
  }
}

class CustomerReport {
  generateCustomerReport(customerName: string): void {
    console.log(`generating a customer report for customer ${customerName}`);
  }
}
