# CodeWars JavaScript Solutions 7 kyu TypeScript.

---

## Mumbling

### Description

This time no story, no theory. The examples below show you how to write function accum:

Examples:

```javascript
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from a..z and A..Z.

---

### Given Code

```javascript
function accum(s) {
  // your code return '';
}
```

---

### Solution

```javascript
function accum(s) {
export function accum(s: string): string {
  return s.split("").map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join("-");
}
```

---

### Tests

```javascript
describe("accum", function () {
  it("sample tests", function () {
    doTest(
      "ZpglnRxqenU",
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu",
    );
    doTest(
      "NyffsGeyylB",
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb",
    );
    doTest(
      "MjtkuBovqrU",
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu",
    );
    doTest(
      "EvidjUnokmM",
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm",
    );
    doTest(
      "HbideVbxncC",
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc",
    );
    doTest(
      "VwhvtHtrxfE",
      "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee",
    );
    doTest(
      "KurgiKmkphY",
      "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy",
    );
    doTest(
      "NctlfBlnmfH",
      "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh",
    );
    doTest(
      "WegunHvbdmV",
      "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv",
    );
    doTest(
      "VoywwSpqidE",
      "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee",
    );
    doTest(
      "VbaixFpxdcO",
      "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo",
    );
    doTest(
      "OlyqvYwkuzF",
      "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff",
    );
    doTest(
      "JrhfdMtchiH",
      "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh",
    );
    doTest(
      "JiwpcSwslvW",
      "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww",
    );
    doTest(
      "EagpiEvmabJ",
      "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj",
    );
    doTest(
      "RznlcEmuxxP",
      "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp",
    );
    doTest(
      "OrggaExarzP",
      "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp",
    );
    doTest(
      "DriraMtedfB",
      "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb",
    );
    doTest(
      "BjxseRxgtjT",
      "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt",
    );
    doTest(
      "EquhxOswchE",
      "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee",
    );
  });

  const chai = require("chai"),
    { assert } = chai;
  chai.config.truncateThreshold = 0;

  function doTest(input, expected) {
    const message = `for s = ${JSON.stringify(input)}\n`;
    const actual = accum(input);
    assert.strictEqual(actual, expected, message);
  }
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)
