export function isPair(arr: any[]): arr is [number, number] {
  return arr.length === 2;
}

console.log(isPair([1, 2])); // true
console.log(isPair([1, 2, 3])); // false
console.log(isPair([1])); // false
console.log(isPair([])); // false
console.log(isPair([1, 2, 3, 4])); // false
console.log(isPair([1, 2, 3, 4, 5])); // false
console.log(isPair([1, 2, 3, 4, 5, 6])); // false
console.log(isPair([1, 2, 3, 4, 5, 6, 7])); // false
console.log(isPair([1, 2, 3, 4, 5, 6, 7, 8])); // false
console.log(isPair([1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
console.log(isPair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
