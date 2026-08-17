# CodeWars TypeScript Solutions 5 kyu TypeScript.

---

## Repeat a string / tuple (TS type)

Description:

Task:

Create a type `Repeat` that will receive a string / tuple `T` and a number `R` (`Repeat<T, R extends number>`).

The type should give the repetition of items in `T`, `R` times.

The given type must be in the same type as `T`:

- if `T` is a string, then `Repeat<T, R>` should give a string;
- if `T` is a tuple, then `Repeat<T, R>` should give a tuple.

Examples:

```typescript
type A = Repeat<"a", 7>;
// A should have type "aaaaaaa"

type B = Repeat<"abc", 5>;
// B should have type "abcabcabcabcabc"

type C = Repeat<["this", "is", "a", "tuple"], 3>;
// C should have type [
//   "this", "is", "a", "tuple",
//   "this", "is", "a", "tuple",
//   "this", "is", "a", "tuple"
// ]

type D = Repeat<"", 123>;
// D should have type ""

type E = Repeat<[], 123>;
// E should have type []

type F = Repeat<["mixed", 1, "type", 2], 2>;
// F should have type [
//   "mixed", 1, "type", 2,
//   "mixed", 1, "type", 2
// ]
```

Good luck!

---

### Given Code

```typescript
export type Repeat<T, R extends number> = T; // Add things to do here...
```

---

### Solution

```typescript
type RepeatString<
  T extends string,
  R extends number,
  Count extends unknown[] = [],
  Result extends string = "",
> = Count["length"] extends R
  ? Result
  : RepeatString<T, R, [...Count, unknown], `${Result}${T}`>;

type RepeatTuple<
  T extends unknown[],
  R extends number,
  Count extends unknown[] = [],
  Result extends unknown[] = [],
> = Count["length"] extends R
  ? Result
  : RepeatTuple<T, R, [...Count, unknown], [...Result, ...T]>;

export type Repeat<T, R extends number> = T extends string
  ? RepeatString<T, R>
  : T extends unknown[]
    ? RepeatTuple<T, R>
    : never;
```

---

### Tests

```typescript
import type { Equal } from "./preloaded";
import type { Repeat } from "./solution";

describe("Sample tests", function () {
  it("Strings", function () {
    const a: Repeat<"a", 3> = "aaa";
    const b: Repeat<"hello ", 5> = "hello hello hello hello hello ";
    const c: Repeat<"hi! ", 8> = "hi! hi! hi! hi! hi! hi! hi! hi! ";
  });

  it("Tuples", function () {
    const a: Repeat<["a"], 3> = ["a", "a", "a"];

    const b: Repeat<["ab", "c"], 6> = [
      "ab",
      "c",
      "ab",
      "c",
      "ab",
      "c",
      "ab",
      "c",
      "ab",
      "c",
      "ab",
      "c",
    ];

    const c: Repeat<["6", "items", "tuple"], 2> = [
      "6",
      "items",
      "tuple",
      "6",
      "items",
      "tuple",
    ];
  });

  it("Type check", function () {
    const a: Equal<Repeat<"abc", 6>, "abcabcabcabcabcabc"> = true;

    const b: Equal<Repeat<[""], 3>, ["", "", ""]> = true;
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/64b41e2b1cefd82a951a3031)
