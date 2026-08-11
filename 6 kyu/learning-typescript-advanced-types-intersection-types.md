# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Learning TypeScript. Advanced Types. Intersection Types

Description:

Learning TypeScript. Advanced Types. Intersection Types

An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

You will mostly see intersection types used for mixins and other concepts that don’t fit in the classic object-oriented mold. (There are a lot of these in JavaScript!) Here’s a simple example that shows how to create a mixin:

```typescript
function extend<T extends Object, U extends Object>(
  first: T,
  second: U,
): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
```

Task:

In the example above you can see that extends function returns T & U which should correspond to intersection of types T and U. But in fact it returns object containing all properties from T mixed with additional properties from U.

Your task is to create function intersect which returns object with properties that are present simultaneously in T and U.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

---

### Given Code

```typescript
export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U,
): T & U {
  let result = <T & U>{};
  // TODO:
  return result;
}
```

---

### Solution

```typescript
export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U,
): T & U {
  const result = {} as T & U;

  for (const key in first) {
    const exInFirst = Object.prototype.hasOwnProperty.call(first, key);

    const exInSecond = Object.prototype.hasOwnProperty.call(second, key);

    if (exInFirst && exInSecond) {
      (result as any)[key] = (first as any)[key];
    }
  }

  return result;
}
```

---

### Tests

```typescript
import { intersect } from "./solution";
import { expect, config } from "chai";
config.truncateThreshold = 0;

describe("intersect", () => {
  it("should contain properties only from first and second objects", () => {
    var obj1 = { a: 1 };
    var obj2 = { a: 2, b: 2 };
    var intersection = intersect(obj1, obj2);
    expect(intersection).to.deep.equal({ a: 1 });
    var obj3 = { c: 3, d: 4 };
    var intersection2 = intersect(obj2, obj3);
    expect(intersection2).to.deep.equal({});
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5916c87540ef95d8e1000007)
