/*
Create a class Rectangle.

The constructor should take 2 arguments which represent width and length 
respectively.

Implement the class so that the output from the example below is correct.
*/

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25