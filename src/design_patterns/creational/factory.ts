class Programmer {
  constructor(public name: string) {}

  public type: string = "Programmer";
}

class Tester {
  constructor(public name: string) {}

  public type: string = "Tester";
}

class EmployeeFactory {
  create(name: string, type: number): Programmer | Tester {
    switch (type) {
      case 1:
        return new Programmer(name);
      case 2:
        return new Tester(name);
      default:
        throw new Error("Invalid type number");
    }
  }
}

const employees: (Programmer | Tester)[] = [];
const employeeFactory: EmployeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("joe", 1));
employees.push(employeeFactory.create("mark", 2));

employees.forEach((e) => {
  console.log(`My name is ${e.name} and i am a ${e.type}`);
});
