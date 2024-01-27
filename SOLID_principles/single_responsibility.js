// WRONG WAY
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
  constructor(name) {
    this.name = name;
  }
}

class CustomerDB {
  storeCustomer(customerName) {
    // store the customer in the database
  }
}

class CustomerReport {
  generateCustomerReport(customerName) {
    // generate a report
  }
}
