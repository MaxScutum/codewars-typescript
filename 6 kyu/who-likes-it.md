# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Who likes it?

Description:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```text
[]                                --> "no one likes this"
["Peter"]                         --> "Peter likes this"
["Jacob", "Alex"]                 --> "Jacob and Alex like this"
["Max", "John", "Mark"]           --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  --> "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in `"and 2 others"` simply increases.

---

### Given Code

```typescript
export const likes = (a: string[]): string => {
  // TODO
};
```

---

### Solution

```typescript
export const likes = (nemesArray: string[]): string => {
  switch (nemesArray.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${nemesArray[0]} likes this`;
    case 2:
      return `${nemesArray[0]} and ${nemesArray[1]} like this`;
    case 3:
      return `${nemesArray[0]}, ${nemesArray[1]} and ${nemesArray[2]} like this`;
    default:
      return `${nemesArray[0]}, ${nemesArray[1]} and ${nemesArray.length - 2} others like this`;
  }
};
```

---

### Tests

```typescript
import { assert } from "chai";

import { likes } from "./solution";

describe("static tests", function () {
  it("should return correct text", function () {
    assert.equal(likes([]), "no one likes this");
    assert.equal(likes(["Peter"]), "Peter likes this");
    assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    assert.equal(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this",
    );
    assert.equal(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
