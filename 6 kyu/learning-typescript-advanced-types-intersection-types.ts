export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U,
): T & U {
  const result = {} as T & U;

  for (const key in first) {
    const exInFirst = Object.prototype.hasOwnProperty.call(first, key);

    const exInSecond = Object.prototype.hasOwnProperty.call(second, key);

    if (exInFirst && exInSecond) {
      (result as any)[key] = (first as any)[key];
    }
  }

  return result;
}
