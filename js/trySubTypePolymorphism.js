class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getRectangelArea() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircleArea() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [
  new Rectangle(1, 2),
  new Circle(4),
  new Rectangle(4, 5),
  new Circle(3),
  new Circle(4),
  new Circle(2),
  new Circle(1),
  new Circle(0),
  new Rectangle(1, 2),
];

function getArea(array) {
  array.forEach((obj, index) => {
    if (obj instanceof Rectangle) {
      console.log(obj.getRectangelArea());
    } else if (obj instanceof Circle) {
      console.log(obj.getCircleArea());
    }
  });
}

console.log(getArea(shapes));

// shapes.forEach(getArea);
