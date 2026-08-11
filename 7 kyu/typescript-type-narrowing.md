# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Typescript Type Narrowing

### Description

The new intern needs help! He has been learning Typescript for the first time, but is having trouble convincing the compiler that his types are ok. Can you help him make his code compile?

Making the code typecheck and compile correctly is all you need to do to pass this kata. The full tests are identical to the sample tests.

---

### Given Code

```typescript
// Fix this function to make the code compile correctly!
export function isPair(arr: any[]): boolean {
  return arr.length == 2;
}
```

---

### Solution

```typescript
export function isPair(arr: any[]): arr is [number, number] {
  return arr.length === 2;
}
```

---

### Tests

```typescript
import { assert } from "chai";
import { isPair } from "./solution";

function swap(x: [any, any]): [any, any] {
  const [a, b] = x;
  return [b, a];
}

function swapIfPair(x: any[]): any[] {
  return isPair(x) ? swap(x) : x;
}

describe("Typescript Type Narrowing", function () {
  it("Should typecheck", function () {
    assert.isOk(true);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/699307a0e8cb9add82125b7f)
