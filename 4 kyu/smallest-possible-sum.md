# CodeWars TypeScript Solutions 4 kyu TypeScript.

---

## Smallest possible sum

Description:

Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

`if X[i] > X[j] then X[i] = X[i] - X[j]`

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

```text
X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
```

The returning output is the sum of the final transformation (here 9).

Example:

```typescript
solution([6, 9, 21]) #-> 9
```

## Solution steps:

```typescript
[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6]  #-> X[2] = 12 - 6
[6, 3, 6]  #-> X[1] = 9 - 6
[6, 3, 3]  #-> X[2] = 6 - 3
[3, 3, 3]  #-> X[1] = 6 - 3
```

## Additional notes:

There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.

---

### Given Code

```typescript
export function solution(numbers: number[]): number {
  return 0;
}
```

---

### Solution

```typescript
export function solution(numbers: number[]): number {
  const pupa = (a: number, b: number): number => {
    while (b !== 0) {
      const reminder = a % b;
      a = b;
      b = reminder;
    }
    return a;
  };
  const sumWithInitial = numbers.reduce((result, number) => {
    return pupa(result, number);
  });

  return sumWithInitial * numbers.length;
}
```

---

### Tests

```typescript
import { assert } from "chai";
import { solution } from "./solution";

describe("Smallest possible sum", () => {
  it("Sample tests", () => {
    assert.equal(solution([1, 21, 55]), 3);
    assert.equal(solution([3, 13, 23, 7, 83]), 5);
    assert.equal(solution([4, 16, 24]), 12);
    assert.equal(solution([30, 12]), 12);

    assert.equal(solution([60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]), 132);

    assert.equal(
      solution([71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]),
      923,
    );

    assert.equal(solution([11, 22]), 22);
    assert.equal(solution([9]), 9);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/52f677797c461daaf7000740)
