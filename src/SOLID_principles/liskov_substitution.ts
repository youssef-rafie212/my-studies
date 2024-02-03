// // WRONG WAY (kept in JS code)
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
abstract class Shape {
  abstract area(): number;
}

class Recatangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area() {
    return this.side * this.side;
  }
}
