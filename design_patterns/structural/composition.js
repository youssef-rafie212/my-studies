class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }

  start() {
    console.log("Engine started!");
  }
}

class Battery {
  constructor(capacity) {
    this.capacity = capacity;
  }

  charge() {
    console.log("Battery charging...");
  }
}

class Car {
  constructor(engine, battery) {
    this.engine = engine;
    this.battery = battery;
  }

  drive() {
    console.log("Car is driving!");
    this.engine.start();
  }
}

const engine = new Engine(250);
const battery = new Battery(80);
const car = new Car(engine, battery);

car.drive();
battery.charge();
