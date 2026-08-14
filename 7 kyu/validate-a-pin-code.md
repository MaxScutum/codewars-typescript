# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Validate a PIN code

Description:

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but **exactly** 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return `true`, else return `false`.

Examples:

```text
"1234"   --> true
"12345"  --> false
"a234"   --> false
```

---

### Given Code

```typescript
export class Kata {
  static validatePin(pin: string): boolean {
    // TODO
  }
}
```

---

### Solution

```typescript
export class Kata {
  static validatePin(pin: string): boolean {
    const correctLength = pin.length === 4 || pin.length === 6;
    const onlyDigits = [...pin].every((char) => char >= "0" && char <= "9");
    return correctLength && onlyDigits;
  }
}
```

---

### Tests

```typescript
import { Kata } from "./solution";
import { assert } from "chai";

describe("validatePIN", function () {
  it("should return False for pins with length other than 4 or 6", function () {
    assert.strictEqual(Kata.validatePin("1"), false, "Wrong output for '1'");
    assert.strictEqual(Kata.validatePin("12"), false, "Wrong output for '12'");
    assert.strictEqual(
      Kata.validatePin("123"),
      false,
      "Wrong output for '123'",
    );
    assert.strictEqual(
      Kata.validatePin("12345"),
      false,
      "Wrong output for '12345'",
    );
    assert.strictEqual(
      Kata.validatePin("1234567"),
      false,
      "Wrong output for '1234567'",
    );
    assert.strictEqual(
      Kata.validatePin("-1234"),
      false,
      "Wrong output for '-1234'",
    );
    assert.strictEqual(
      Kata.validatePin("1.234"),
      false,
      "Wrong output for '1.234'",
    );
    assert.strictEqual(
      Kata.validatePin("00000000"),
      false,
      "Wrong output for '00000000'",
    );
  });

  it("should return False for pins which contain characters other than digits", function () {
    assert.strictEqual(
      Kata.validatePin("a234"),
      false,
      "Wrong output for 'a234'",
    );
    assert.strictEqual(
      Kata.validatePin(".234"),
      false,
      "Wrong output for '.234'",
    );
  });

  it("should return True for valid pins", function () {
    assert.strictEqual(
      Kata.validatePin("1234"),
      true,
      "Wrong output for '1234'",
    );
    assert.strictEqual(
      Kata.validatePin("0000"),
      true,
      "Wrong output for '0000'",
    );
    assert.strictEqual(
      Kata.validatePin("1111"),
      true,
      "Wrong output for '1111'",
    );
    assert.strictEqual(
      Kata.validatePin("123456"),
      true,
      "Wrong output for '123456'",
    );
    assert.strictEqual(
      Kata.validatePin("098765"),
      true,
      "Wrong output for '098765'",
    );
    assert.strictEqual(
      Kata.validatePin("000000"),
      true,
      "Wrong output for '000000'",
    );
    assert.strictEqual(
      Kata.validatePin("123456"),
      true,
      "Wrong output for '123456'",
    );
    assert.strictEqual(
      Kata.validatePin("090909"),
      true,
      "Wrong output for '090909'",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)
