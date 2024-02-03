// // WRONG WAY (kept in JS code)
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
abstract class Shape1 {
  abstract draw(): void;
}

class Recatangle1 extends Shape1 {
  constructor(public width: number, public height: number) {
    super();
  }

  draw(): void {
    console.log(
      `drawing a rectangle with width ${this.width} and heigth ${this.height}`
    );
  }
}

class Square1 extends Shape1 {
  constructor(public side: number) {
    super();
  }

  draw(): void {
    console.log(`drawing a square with side ${this.side}`);
  }
}

class DrawShape {
  draw(shape: Shape1): void {
    shape.draw();
  }
}

const square: Square1 = new Square1(2);
const rectangle: Recatangle1 = new Recatangle1(4, 6);
const drawShape: DrawShape = new DrawShape();

drawShape.draw(square);
drawShape.draw(rectangle);
