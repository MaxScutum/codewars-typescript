# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Is the number odd? (TS type)

Description:

Task

Create a type `IsOdd` that will receive a number `N` (`IsOdd<N extends number>`).

The type should return `true` if the provided number is odd, and `false` if it's not.

Additional Notes:

- The number will always be an integer.
- Range for `N` is: `−10⁹ < N < 10⁹`

Examples:

```typescript
type A = IsOdd<13>; // A = true
type B = IsOdd<12>; // B = false
type C = IsOdd<0>; // C = false
type D = IsOdd<1>; // D = true
type E = IsOdd<103456>; // E = false
type F = IsOdd<-25>; // F = true
```

Good luck!

---

### Given Code

```typescript
export type IsOdd<N extends number> = true;
```

---

### Solution

```typescript
type OddDigit = "1" | "3" | "5" | "7" | "9";

export type IsOdd<NumberToCheck extends number> =
  `${NumberToCheck}` extends `${string}${OddDigit}` ? true : false;
```

---

### Tests

```typescript
import type { Equal } from "./preloaded";
import type { IsOdd } from "./solution";

describe("Sample tests", function () {
  it("Positives and Zero", function () {
    const a: IsOdd<13> = true;
    const b: IsOdd<12> = false;
    const c: IsOdd<1> = true;
    const d: IsOdd<103456> = false;
    const e: IsOdd<0> = false;
  });

  it("Negatives", function () {
    const a: IsOdd<-25> = true;
  });

  it("Strict type tests", function () {
    const a: Equal<IsOdd<123>, true> = true;
    const b: Equal<IsOdd<0>, false> = true;
    const c: Equal<IsOdd<1003>, true> = true;
    const d: Equal<IsOdd<-22>, false> = true;
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/66b65781d82d44b5517ff31d)
