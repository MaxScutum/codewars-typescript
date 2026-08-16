# CodeWars TypeScript Solutions 6 kyu TypeScript.

---

## Fruit Machine

Description:

Introduction:

Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed.

Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished.

Many modern machines are still equipped with a legacy lever in addition to the button.

(Source Wikipedia)

Task:

You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

Rules:

1. There are always exactly three reels.
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different.
6. Three of the same is worth more than two of the same.
7. Two of the same plus one `"Wild"` is double the score.
8. No matching items returns `0`.

Scoring:

| Item   | Three of the same | Two of the same | Two of the same plus one Wild |
| ------ | ----------------: | --------------: | ----------------------------: |
| Wild   |               100 |              10 |                           N/A |
| Star   |                90 |               9 |                            18 |
| Bell   |                80 |               8 |                            16 |
| Shell  |                70 |               7 |                            14 |
| Seven  |                60 |               6 |                            12 |
| Cherry |                50 |               5 |                            10 |
| Bar    |                40 |               4 |                             8 |
| King   |                30 |               3 |                             6 |
| Queen  |                20 |               2 |                             4 |
| Jack   |                10 |               1 |                             2 |

Returns:

Return an integer of the score.

Example:

Initialise:

```typescript
reel1 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];

reel2 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];

reel3 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];

spin = [5, 5, 5];

result = fruit([reel1, reel2, reel3], spin);
```

Scoring:

```text
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
```

Return:

```text
result == 50
```

Good luck and enjoy!

---

### Given Code

```typescript
export function fruit(reels: string[][], spins: number[]): number {
  // Good luck
}
```

---

### Solution

```TypeScript
export function fruit(reels: string[][], spins: number[]): number{
  const scores: Record<string, number> = {
    Wild: 10,
    Star: 9,
    Bell: 8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1,
  };
  const [first, second, third] = reels.map(
    (reel, index) => reel[spins[index]]
  );

  if (first === second && second === third) {
    return scores[first] * 10;
  }

  if (first === second) {
    return scores[first] * (third === "Wild" ? 2 : 1);
  }

  if (first === third) {
    return scores[first] * (second === "Wild" ? 2 : 1);
  }

  if (second === third) {
    return scores[second] * (first === "Wild" ? 2 : 1);
  }

  return 0;
}
```

---

### Tests

```typescript
import { fruit } from "./solution";
import { assert } from "chai";
let reel, reel1, reel2, reel3, spin;

describe("Sample Tests", function () {
  it("Should pass sample tests", function () {
    reel = [
      "Wild",
      "Star",
      "Bell",
      "Shell",
      "Seven",
      "Cherry",
      "Bar",
      "King",
      "Queen",
      "Jack",
    ];
    spin = [0, 0, 0];
    assert.equal(fruit([reel, reel, reel], spin), 100, "Should return: '100'");

    reel1 = [
      "Wild",
      "Star",
      "Bell",
      "Shell",
      "Seven",
      "Cherry",
      "Bar",
      "King",
      "Queen",
      "Jack",
    ];
    reel2 = [
      "Bar",
      "Wild",
      "Queen",
      "Bell",
      "King",
      "Seven",
      "Cherry",
      "Jack",
      "Star",
      "Shell",
    ];
    reel3 = [
      "Bell",
      "King",
      "Wild",
      "Bar",
      "Seven",
      "Jack",
      "Shell",
      "Cherry",
      "Queen",
      "Star",
    ];
    spin = [5, 4, 3];
    assert.equal(fruit([reel1, reel2, reel3], spin), 0, "Should return: '0'");

    reel1 = [
      "King",
      "Cherry",
      "Bar",
      "Jack",
      "Seven",
      "Queen",
      "Star",
      "Shell",
      "Bell",
      "Wild",
    ];
    reel2 = [
      "Bell",
      "Seven",
      "Jack",
      "Queen",
      "Bar",
      "Star",
      "Shell",
      "Wild",
      "Cherry",
      "King",
    ];
    reel3 = [
      "Wild",
      "King",
      "Queen",
      "Seven",
      "Star",
      "Bar",
      "Shell",
      "Cherry",
      "Jack",
      "Bell",
    ];
    spin = [0, 0, 1];
    assert.equal(fruit([reel1, reel2, reel3], spin), 3, "Should return: '3'");

    reel1 = [
      "King",
      "Jack",
      "Wild",
      "Bell",
      "Star",
      "Seven",
      "Queen",
      "Cherry",
      "Shell",
      "Bar",
    ];
    reel2 = [
      "Star",
      "Bar",
      "Jack",
      "Seven",
      "Queen",
      "Wild",
      "King",
      "Bell",
      "Cherry",
      "Shell",
    ];
    reel3 = [
      "King",
      "Bell",
      "Jack",
      "Shell",
      "Star",
      "Cherry",
      "Queen",
      "Bar",
      "Wild",
      "Seven",
    ];
    spin = [0, 5, 0];
    assert.equal(fruit([reel1, reel2, reel3], spin), 6, "Should return: '6'");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/590adadea658017d90000039)
