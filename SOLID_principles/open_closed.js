// // WRONG WAY
// class Rectangle{
//   constructor(width , height){
//     this.width = width;
//     this.height = height;
//   }
// }

// class Square{
//   constructor(side){
//     this.side = side;
//   }
// }

// class DrawShape{
//   draw(shape){
//     if (shape.instanceof(Rectangle)){
//       // draw rectangle
//     }else if(shape.instanceof(Square)){
//       // draw square
//     }
//   }
// }

// RIGHT WAY
class Shape {
  constructor() {
    throw new Error("can not instantiate abstract class");
  }

  draw() {
    throw new Error("abstract method not implemented");
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  draw() {
    // draw Triangle
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  draw() {
    // draw Square
  }
}

class DrawShape {
  draw(shape) {
    shape.draw();
  }
}
