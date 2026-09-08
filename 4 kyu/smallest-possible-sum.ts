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

console.log(solution([6, 9, 21])); // 6
console.log(solution([15, 21, 24, 30, 49])); // 5040
