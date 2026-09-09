# CodeWars TypeScript Solutions 8 kyu TypeScript.

---

## Learning TypeScript. Basic Types. Type Assertions

Description:

Learning TypeScript. Basic Types. Type Assertions

Overview

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:

```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

And the other is the as-syntax:

```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

Task

You are given the following code:

```typescript
export class SuccessServerResult {
  constructor(
    public httpCode: number,
    public resultObject: Object,
  ) {}
}

export class ErrorServerResult {
  constructor(
    public httpCode: number,
    public message: string,
  ) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning result.resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return result.message;
  }
}
```

Your task is to find and fix error in function `getResult`.

**HINT:** Try to use double assertion - first convert it to `any` and then convert it to `ErrorServerResult`.

**P.S.** Solved this kata? Take a look at other katas in "[**Learning TypeScript**](https://www.codewars.com/collections/learning-typescript)" collection.

---

### Given Code

```typescript
export class SuccessServerResult {
  constructor(
    public httpCode: number,
    public resultObject: Object,
  ) {}
}

export class ErrorServerResult {
  constructor(
    public httpCode: number,
    public message: string,
  ) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning result.resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return result.message;
  }
}
```

---

### Solution

```typescript
export class SuccessServerResult {
  constructor(
    public httpCode: number,
    public resultObject: Object,
  ) {}
}

export class ErrorServerResult {
  constructor(
    public httpCode: number,
    public message: string,
  ) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return (result as unknown as ErrorServerResult).message;
  }
}
```

---

### Tests

```typescript
import { expect } from "chai";
import { getResult, ErrorServerResult, SuccessServerResult } from "./solution";

describe("getResult", () => {
  it("should return correct results for SuccessServerResult", () => {
    var message = { message: "Hello, world!" };
    var success = new SuccessServerResult(200, message);

    expect(getResult(success)).to.deep.equal(message);
  });

  it("should return correct results for ErrorServerResult", () => {
    var message = "Not found";
    var error = new ErrorServerResult(404, message);

    expect(getResult(error as any)).to.equal(message);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5916b952e76dc9cbcb000066)
