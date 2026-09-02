type OddDigit = "1" | "3" | "5" | "7" | "9";

export type IsOdd<NumberToCheck extends number> =
  `${NumberToCheck}` extends `${string}${OddDigit}` ? true : false;
