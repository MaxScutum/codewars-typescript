# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Learning TypeScript. Classes & Interfaces. Getters

Description:

Learning TypeScript. Classes & Interfaces. Getters

N.B.: To solve this kata you need to choose `"2.4/ES6"` target.

Task

Define the following classes:

I. Cuboid

The object constructor for the class `Cuboid` should receive exactly three arguments in the following order: `length`, `width`, `height` and store these three values in `this.length`, `this.width` and `this.height` respectively.

The class `Cuboid` should then have a getter `surfaceArea` which returns the surface area of the cuboid and a getter `volume` which returns the volume of the cuboid.

II. Cube

Class `Cube` is a subclass of class `Cuboid`.

The constructor function of `Cube` should receive one argument only, its length, and use that value passed in to set `this.length`, `this.width` and `this.height`.

Hint: Make a call to `super`, passing in the correct arguments, to make life easier ;)

Articles of Interest

Below are some articles of interest that may help you complete this Kata:

1. [Stack Overflow - What are getters and setters in ES6?](http://stackoverflow.com/questions/28222276/what-are-getters-and-setters-for-in-ecmascript-6-classes)
2. [getter - Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

Credits

This is TypeScript version of kata [Fun with ES6 Classes #3 - Cuboids, Cubes and Getters](http://www.codewars.com/kata/56fbdda707cff41b68000de2) by @donaldsebleung.

P.S. Solved this kata? Take a look at other katas in [Learning TypeScript](https://www.codewars.com/collections/learning-typescript) collection.

---

### Given Code

```typescript
export class Cuboid {
  // TODO
}

export class Cube extends Cuboid {
  // TODO
}
```

---

### Solution

```typescript
export class Cuboid {
  constructor(
    public length: number,
    public width: number,
    public height: number,
  ) {}

  get surfaceArea(): number {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }

  get volume(): number {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor(sideLength: number) {
    super(sideLength, sideLength, sideLength);
  }
}
```

---

### Tests

```typescript
import { expect } from "chai";
import { Cube, Cuboid } from "./solution";

describe("class Cuboid", () => {
  it("should initialize properly and have working getters", () => {
    var cuboid = new Cuboid(1, 2, 3);

    expect(cuboid.length).to.equal(1);
    expect(cuboid.width).to.equal(2);
    expect(cuboid.height).to.equal(3);
    expect(cuboid.volume).to.equal(6);
    expect(cuboid.surfaceArea).to.equal(22);

    cuboid.length = 4;

    expect(cuboid.volume).to.equal(24);
    expect(cuboid.surfaceArea).to.equal(52);

    cuboid.width = 5;

    expect(cuboid.volume).to.equal(60);
    expect(cuboid.surfaceArea).to.equal(94);

    cuboid.height = 6;

    expect(cuboid.volume).to.equal(120);
    expect(cuboid.surfaceArea).to.equal(148);

    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];

    expect(cuboid.volume).to.equal(504);
    expect(cuboid.surfaceArea).to.equal(382);
  });
});

describe("class Cube extends Cuboid", () => {
  it("should initialize properly and have the same getters as the parent class", () => {
    var cube = new Cube(1);

    expect(cube.length).to.equal(1);
    expect(cube.width).to.equal(1);
    expect(cube.height).to.equal(1);
    expect(cube.volume).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);

    cube.length = cube.width = cube.height = 2;

    expect(cube.volume).to.equal(8);
    expect(cube.surfaceArea).to.equal(24);

    cube.length = cube.width = cube.height = 3;

    expect(cube.volume).to.equal(27);
    expect(cube.surfaceArea).to.equal(54);

    cube.length = cube.width = cube.height = 5;

    expect(cube.volume).to.equal(125);
    expect(cube.surfaceArea).to.equal(150);

    cube.length = cube.width = cube.height = 10;

    expect(cube.volume).to.equal(1000);
    expect(cube.surfaceArea).to.equal(600);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/599d636e607719edf600010a)
