# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Reverse a Tuple (Type)

Description:

Reverse a tuple... at the type level.

In other words, if you have:

```typescript
type Foo = [string, number, boolean];
```

then `Reverse<Foo>` should be the type:

```typescript
[boolean, number, string];
```

`Reverse` should also reject non-tuple inputs.

For example:

```typescript
Reverse<1>;
```

should be a type error.

Since this is type-level programming, success is simply making the program compile.

---

### Given Code

```typescript
export type Reverse<T extends Array<unknown>> = T;
```

---

### Solution

```typescript
export type Reverse<T extends Array<unknown>> = T extends [
  infer First,
  ...infer Rest,
]
  ? [...Reverse<Rest>, First]
  : [];
```

---

### Tests

```typescript
import { Reverse } from "./solution";

describe("typechecking", () => {
  it("typechecks", () => {
    const test1: Reverse<[1, 2, 3]> = [3, 2, 1];

    const test2: Reverse<[1, 3, 2]> = [2, 3, 1];
  });

  it("handles very long tuples", () => {
    const long: Reverse<
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
      ]
    > = [
      46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29,
      28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/62aa9a45732360005cb69c26)
