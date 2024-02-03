class Person {
  constructor(
    public name: string,
    public age: number,
    public weight: number,
    public gender: boolean
  ) {}
}

class PersonBuilder {
  constructor(
    public name: string,
    public gender: boolean,
    public age?: number,
    public weight?: number
  ) {}

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setWeight(weight: number): PersonBuilder {
    this.weight = weight;
    return this;
  }

  build(): Person {
    return new Person(this.name, this.age!, this.weight!, this.gender);
  }
}

const person: Person = new PersonBuilder("youssef", true)
  .setAge(21)
  .setWeight(70)
  .build();

console.log(person);
