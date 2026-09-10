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
