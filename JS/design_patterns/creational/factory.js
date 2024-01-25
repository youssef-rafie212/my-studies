class Programmer {
  constructor(name) {
    this.name = name;
    this.type = "Programmer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

class EmployeeFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Programmer(name);
      case 2:
        return new Tester(name);
    }
  }
}

const employees = [];
const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("joe", 1));
employees.push(employeeFactory.create("mark", 2));

employees.forEach((e) => {
  console.log(`My name is ${e.name} and i am a ${e.type}`);
});
