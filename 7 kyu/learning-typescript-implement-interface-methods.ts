interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  constructor(public side: number) {}

  area(): number {
    return this.side ** 2;
  }

  perimeter(): number {
    return this.side * 4;
  }
}

export class Circle implements IGeometricFigure {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

console.log(new Square(1).area()); // 1
console.log(new Square(1).perimeter()); // 4
console.log(new Circle(1).area()); // 3.141592653589793
console.log(new Circle(1).perimeter()); // 6.283185307179586
