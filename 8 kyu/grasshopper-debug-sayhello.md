# CodeWars TypeScript Solutions 8 kyu TypeScript.

---

## Grasshopper - Debug sayHello

Description:

Debugging sayHello function.

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

```text
Hello, Mr. Spock
```

---

### Given Code

```typescript
export function sayHello(name: string): string {
  return "Hello";
}
```

---

### Solution

```typescript
export function sayHello(name: string): string {
  return `Hello, ${name}`;
}
```

---

### Tests

```typescript
import { assert } from "chai";

export function sayHello(name: string): string {
  return `Hello, ${name}`;
}

describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    assert.equal(sayHello("Mr. Spock"), "Hello, Mr. Spock");
    assert.equal(sayHello("Captain Kirk"), "Hello, Captain Kirk");
    assert.equal(sayHello("Liutenant Uhura"), "Hello, Liutenant Uhura");
    assert.equal(sayHello("Dr. McCoy"), "Hello, Dr. McCoy");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5625618b1fe21ab49f00001f)
