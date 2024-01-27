class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(value) {
    this.salary = value;
  }

  accept(visitor) {
    visitor(this);
  }
}

const doubleSalary = (employee) => {
  employee.setSalary(employee.getSalary() * 2);
};

const empl = new Employee("youssef", 4000);

console.log(empl.getSalary()); // 4000
empl.accept(doubleSalary);
console.log(empl.getSalary()); // 8000
