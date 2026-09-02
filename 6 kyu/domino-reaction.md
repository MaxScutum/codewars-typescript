# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Domino Reaction

Description:

You're given a string of dominos. For each slot, there are 3 options:

- `"|"` represents a standing domino
- `"/"` represents a knocked over domino
- `" "` represents a space where there is no domino

For example:

```text
"||| ||||//| |/"
```

Tipping a domino will cause the next domino to its right to fall over as well, but if a domino is already tipped over, or there is a domino missing, the reaction will stop.

What you must do is find the resulting string if the first domino is pushed over.

So in our example above, the result would be:

```text
"/// ||||//| |/"
```

since the reaction would stop as soon as it gets to a space.

---

### Given Code

```typescript
export function dominoReaction(sequence: string): string {
  //Your code here
}
```

---

### Solution

```typescript
export function dominoReaction(sequence: string): string {
  const dominos = sequence.split("");

  for (let i = 0; i < dominos.length; i++) {
    if (dominos[i] !== "|") {
      break;
    }

    dominos[i] = "/";
  }

  return dominos.join("");
}
```

---

### Tests

```typescript
import { dominoReaction } from "./solution";
import { assert, expect } from "chai";

describe("solution", function () {
  it("Test1", () => {
    let result = dominoReaction("||| ||||//| |/");
    expect(result).to.equal("/// ||||//| |/");
  });

  it("Test2", () => {
    let result = dominoReaction("|||||");
    expect(result).to.equal("/////");
  });

  it("Test3", () => {
    let result = dominoReaction(" ///");
    expect(result).to.equal(" ///");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/584cfac5bd160694640000ae)
