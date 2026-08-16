export function fruit(reels: string[][], spins: number[]): number {
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
  const [first, second, third] = reels.map((reel, index) => reel[spins[index]]);

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

console.log(
  fruit(
    [
      [
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
      ],
      [
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
      ],
      [
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
      ],
    ],
    [0, 0, 0],
  ),
);
