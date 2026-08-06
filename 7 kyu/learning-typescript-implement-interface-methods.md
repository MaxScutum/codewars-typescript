# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Learning TypeScript. Classes & Interfaces. Implement interface methods

### Description

Learning TypeScript. Classes & Interfaces. Implement interface methods
Overview
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Task
You are given an interface IGeometricFigure:

```typescript
interface IGeometricFigure {
  /** Calculates area of the figure */
  area: () => number;
  /** Calculates perimeter of the figure */
  perimeter: () => number;
}
```

Your task is to implement classes Square and Circle:

```typescript
export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
```

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

---

### Given Code

```typescript
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
```

---

### Solution

```typescript
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
```

---

### Tests

```typescript
import { Circle, Square } from "./solution";
import { expect } from "chai";

var EPSILON = 0.000001;

describe("The Square class", () => {
  it("should calculate area and perimeter correctly", () => {
    var square = new Square(1);
    expect(square.area()).to.equal(1);
    expect(square.perimeter()).to.equal(4);
  });
});

describe("The Circle class", () => {
  it("should calculate area and perimeter correctly", () => {
    var circle = new Circle(1);
    expect(circle.area()).to.equal(Math.PI);
    expect(circle.perimeter()).to.equal(2 * Math.PI);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/591305520c6f9f5c93000052)
