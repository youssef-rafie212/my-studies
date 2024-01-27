// // WRONG WAY
// class Recatangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   setWidth(value) {
//     this.width = value;
//   }

//   setHeight(value) {
//     this.height = value;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// class Square extends Recatangle {
//   setWidth(value) {
//     this.width = value;
//     this.height = value;
//   }

//   setHeight(value) {
//     this.height = value;
//     this.width = value;
//   }
// }

// const rectangle = new Recatangle(10, 4);
// rectangle.setHeight(5);
// console.log(rectangle.area());

// const rectangle2 = new Square(10, 4);
// rectangle2.setHeight(5);
// console.log(rectangle2.area()); // not the same result

// RIGHT WAY
class Shape {
  constructor() {
    throw new Error(`Can't instantiate abstract class`);
  }

  area() {
    throw new Error("Abstract method not implemented");
  }
}

class Recatangle extends Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    this.side = side;
  }

  area() {
    return side * side;
  }
}
