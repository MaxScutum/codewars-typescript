# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Learning TypeScript. Classes & Interfaces. Setters

### Description

Learning TypeScript. Classes & Interfaces. Setters

N.B.: To solve this kata you need to choose `"2.4/ES6"` target.

#### Overview

In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area.

The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed.

However, in the previous exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/surface area, there were an infinite number of possibilities for the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume.

Therefore, in this kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

#### Task

You're given the `ICuboid` interface.

Define a class `Cube` that implements `ICuboid`.

The constructor function of `Cube` takes exactly one parameter `length` and stores the value of the argument into `this.length`.

You will then define both a getter and a setter for the `surfaceArea` and `volume` of the cube.

#### Articles of Interest

- Setters — Mozilla Developer
- What are getters and setters? — Stack Overflow
- ES6 Classes Intro — includes a section on getters and setters

#### Credits

This is the TypeScript version of kata "Fun with ES6 Classes #4 - Cubes and Setters" by @donaldsebleung.

P.S. Solved this kata? Take a look at other katas in the "Learning TypeScript" collection.

---

### Given Code

```typescript
declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  // TODO:
}
```

---

### Solution

```typescript
declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {}

  get surfaceArea(): number {
    return 6 * this.length ** 2;
  }

  set surfaceArea(value: number) {
    this.length = Math.sqrt(value / 6);
  }

  get volume(): number {
    return this.length ** 3;
  }

  set volume(value: number) {
    this.length = Math.cbrt(value);
  }
}
```

---

### Tests

```typescript
import { expect } from "chai";
import { Cube } from "./solution";

describe("The Cube class", () => {
  it("should initialize properly and have working getters and setters", () => {
    var cube = new Cube(1);
    expect(cube.length).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);
    expect(cube.volume).to.equal(1);

    cube.length = 2;
    expect(cube.surfaceArea).to.equal(24);
    expect(cube.volume).to.equal(8);

    cube.surfaceArea = 54;
    expect(cube.length).to.equal(3);
    expect(cube.volume).to.equal(27);

    cube.surfaceArea = 96;
    expect(cube.length).to.equal(4);
    expect(cube.volume).to.equal(64);

    cube.volume = 125;
    expect(cube.length).to.approximately(5, 0.000001);
    expect(cube.surfaceArea).to.approximately(150, 0.000001);

    cube.volume = 1000;
    expect(cube.length).to.approximately(10, 0.000001);
    expect(cube.surfaceArea).to.approximately(600, 0.000001);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/590b85b745eaa415e10000b1)
