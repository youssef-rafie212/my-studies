class Person {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }
}

class PersonBuilder {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  build() {
    return new Person(this.name, this.age, this.weight, this.gender);
  }
}

const person = new PersonBuilder("youssef", "male")
  .setAge(21)
  .setWeight(65)
  .build();

console.log(person);
