class Engine {
  constructor(public horsepower: number) {}

  start(): void {
    console.log("Engine started!");
  }
}

class Battery {
  constructor(public capacity: number) {}

  charge(): void {
    console.log("Battery charging...");
  }
}

class Car {
  constructor(public engine: Engine, public battery: Battery) {}

  drive(): void {
    console.log("Car is driving!");
    this.engine.start();
  }
}

const engine: Engine = new Engine(250);
const battery: Battery = new Battery(80);
const car: Car = new Car(engine, battery);

car.drive();
battery.charge();
