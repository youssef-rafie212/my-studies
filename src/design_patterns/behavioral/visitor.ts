class Employee {
  constructor(public name: string, public salary: number) {}

  getSalary(): number {
    return this.salary;
  }

  setSalary(value: number): void {
    this.salary = value;
  }

  accept(visitor: Function): void {
    visitor(this);
  }
}

const doubleSalary = (employee: Employee): void => {
  employee.setSalary(employee.getSalary() * 2);
};

const empl: Employee = new Employee("youssef", 4000);

console.log(empl.getSalary()); // 4000
empl.accept(doubleSalary);
console.log(empl.getSalary()); // 8000
