# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Learning TypeScript. Classes & Interfaces. Singletons

Descriptio:

Learning TypeScript. Classes & Interfaces. Singletons

Overview

In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.

An implementation of the singleton pattern must:

- ensure that only one instance of the singleton class ever exists;
- and provide global access to that instance.

Typically, this is done by:

- declaring all constructors of the class to be private (or throw an error in constructor); and
- providing a static method that returns a reference to the instance.

Task

Your task is to implement `SingletonCounter` class with static method `getInstance` that returns instance of `SingletonCounter`. Constructor of this class must be declared as private. This class should have `inc()` which increments the value of the counter (default value of the counter is zero).

**P.S.** Solved this kata? Take a look at other katas in "[**Learning TypeScript**](https://www.codewars.com/collections/learning-typescript)" collection.

---

### Given Code

```typescript
export class SingletonCounter {
  // TODO:
}
```

---

### Solution

```typescript
export class SingletonCounter {
  counter: number = 0;

  private static instance: SingletonCounter;

  private constructor() {}

  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }

    return SingletonCounter.instance;
  }

  inc(): number {
    this.counter += 1;
    return this.counter;
  }
}
```

---

### Tests

```typescript
import { SingletonCounter } from "./solution";
import { expect } from "chai";

describe("The SingletonCounter class", () => {
  var count = 4;

  it("should have correct inc() method", () => {
    var counter = SingletonCounter.getInstance();

    expect(counter.inc()).to.equal(1);
    expect(counter.inc()).to.equal(2);
    expect(counter.inc()).to.equal(3);
    expect(counter.inc()).to.equal(4);
  });

  it("should work as a singleton", () => {
    var counter1 = SingletonCounter.getInstance();
    var counter2 = SingletonCounter.getInstance();

    expect(counter1.inc()).to.equal(++count);
    expect(counter2.inc()).to.equal(++count);
    expect(counter1.inc()).to.equal(++count);
    expect(counter2.inc()).to.equal(++count);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/591445324670baed3200008d)
